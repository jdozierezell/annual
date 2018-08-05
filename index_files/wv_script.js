/**
 * WeeklyView Javascript
 * @version  1.0
 */
jQuery(document).ready(function($){
	
	// Hover on event dots tooltips
		$('body').on('mouseover','em.dayTag',function(){
			OBJ = $(this);
			
			PAR = OBJ.closest('.eventon_weeklyview');

			p = OBJ.offset();
			t = PAR.offset();
			w = PAR.width();
			xleft = p.left - t.left;
			xtop = p.top - t.top;

			TITLE = OBJ.data('title');

			// adjust side of the tooltip
			if((w/2) > xleft){
				HTML = "<em class='evowv_tooltip' style='top:"+(xtop-13)+"px;left:"+(xleft+23)+"px;'>"+TITLE+"</em>";
			}else{

				xright = w - xleft;
				HTML = "<em class='evowv_tooltip left' style='top:"+(xtop-13)+"px;right:"+(xright+13)+"px;'>"+TITLE+"</em>";
			}
			
			PAR.append(HTML);
		});

		$('body').on('mouseout','em.dayTag',function(){
			OBJ = $(this);			
			OBJ.closest('.eventon_weeklyview').find('.evowv_tooltip').remove();
		});

	// Click on each week day
		$('.calendar_header').on('click','.evo_wv_day', function(){
			OBJ = $(this);

			// set focus class
				OBJ.siblings().removeClass('focus');
				OBJ.addClass('focus');

			events = OBJ.attr('data-events');
			evCal = OBJ.closest('.ajde_evcal_calendar');
			evList = evCal.find('.eventon_events_list');
			evList.find('.eventon_list_event').hide();

			// If set to hide events on initial load
			evCal.find('.eventon_events_list').removeClass('evowv_hide');
			evCal.find('.evowv_click_notice').remove();

			if( events != 'no'){
				events = $.parseJSON(events);								
				$.each(events, function(index, value){					
					evList.find('.eventon_list_event[data-time='+ value +']').slideDown();
				});
			}else{
				noev = evList.find('div.noevent').length;
				if(!noev){
					tx_noevents = evCal.find('.EVOWV_content').attr('data-txnoevent');
					evList.append('<div class="eventon_list_event noevent"><p class="no_events">'+tx_noevents+'</p></div>');
				}
				evList.find('.noevent').slideDown();
			}
		});	
	
	// Week range selection
		$('.evoWV').on('mouseover', '.EVOWV_change', function(){
			$(this).parent().find('.EVOWV_ranger').show();
		});
		$('.evoWV').on('mouseleave','.EVOWV_ranger', function(){
			$(this).hide();
		});
		$('.evoWV').on('click','.EVOWV_range_mover',function(){
			var OBJ = $(this),
			RANGES = OBJ.siblings('.EVOWV_ranger_handle').find('ul');

			CHANGE = 150;
			TOP = parseInt(RANGES.css('top'));
			if( OBJ.hasClass('up')){	
				NEW = TOP+CHANGE;
				if(NEW>0) return;
				RANGES.animate({'top':NEW});
			}else{
				NEW = TOP-CHANGE;
				if(NEW<-600) return;
				RANGES.animate({'top':NEW});
			}
		});
	// click on a new range
		$('.evoWV').on('click','.EVOWV_date_ranges li',function(){
			var evCal = $(this).closest('.ajde_evcal_calendar');
			if(!evCal.hasClass('evoWV')) return;
			
			new_week(evCal.attr('id'),  $(this) );
		} );

	// click on side arrows
		$('.evoWV').on('click', '.evowv_arrow', function(event){
			var evCal = $(this).closest('.ajde_evcal_calendar');
			if(!evCal.hasClass('evoWV')) return;
			
			new_week(evCal.attr('id'),  $(this) );
		});	

	// When main cal AJAX update events
		$('body').on('evo_main_ajax_success',function(event, evCal, evodata, ajaxtype, eventList){
			
			//console.log(eventList);
			
			if(evCal.hasClass('evoWV')){

				EVOWV_content = evCal.find('.EVOWV_content');
				// AJAX data array
					var data_arg = {
						action: 	'weekupate',
						cal_id: evCal.attr('id'),
						week_incre: 			EVOWV_content.attr('data-week_incre'),
						focus_start_date_range: EVOWV_content.attr('data-start'),
						focus_end_date_range: 	EVOWV_content.attr('data-end'),
						eventsLIST: 			eventList,
						shortcode: 			evCal.evo_shortcodes(),
					};
				$.ajax({
					beforeSend: function(){
						//evCal.find('#eventon_loadbar').show().css({width:'0%'}).animate({width:'100%'});
					},
					type: 'POST',
					url:the_ajax_script.ajaxurl,
					data: data_arg,
					dataType:'json',
					success:function(data){
						if(data.status=='ok'){
							evCal.find('.EVOWV_content').replaceWith(data.header);
							evCal.find('.eventon_events_list').html(data.events);
						}

					},complete:function(){	
						// evCal.evo_loader_animation({direction:'end'});
					}
				});
			}
		});

	// AJAX: New Week events and data update
		function new_week(cal_id,  OBJ){			
			var evCal = $('#'+cal_id);			

			// run this script only on calendars with Fullcal
			if(evCal.hasClass('evoWV')){

				var cal_header = evCal.find('.calendar_header');
				var evodata = evCal.find('.evo-data');
				var EVOWV_content = evCal.find('.EVOWV_content');
				
				// AJAX data array
					var data_arg = {
						action: 	'new_week',
						cal_id: cal_id,
						week_incre: 	OBJ.attr('data-week'),
						filters: 		evCal.evoGetFilters(),
						shortcode: 		evCal.evo_shortcodes(),
						evodata: 		evCal.evo_getevodata()
					};
				
				$.ajax({
					beforeSend: function(){
						evCal.evo_loader_animation({direction:'start'});
					},
					type: 'POST',
					url:the_ajax_script.ajaxurl,
					data: data_arg,
					dataType:'json',
					success:function(data){
							
						if(data.status=='ok'){
							evCal.find('.EVOWV_content').replaceWith(data.header);
							evCal.find('.eventon_events_list').html(data.events);
							evCal.find('.eventon_events_list').removeClass('evowv_hide');

							// update evo-data
								evodata.attr({
									'data-range_start':data.unix_start,
									'data-range_end': data.unix_end
								});
						}

					},complete:function(){	
						evCal.evo_loader_animation({direction:'end'});
					}
				});
			}
		}
			
	// if mobile check
		function is_mobile(){
			return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )? true: false;
		}
});