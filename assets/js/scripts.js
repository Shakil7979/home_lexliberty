$(document).ready(function(){
 
	var data_arr = [
					'',
					'<iframe src="https://www.youtube.com/embed/6kl2ouO3LMM?si=m_Kol4N9EXWj7w3B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
					'<iframe src="https://www.youtube.com/embed/YgzoCfAf9AY?si=nh5ufr-XYXdrbctN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
					'<iframe src="https://www.youtube.com/embed/SOJZWGjktBA?si=_EaEp6CKDQGqAn-G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
					'<iframe src="https://www.youtube.com/embed/hHVaDTDUoHw?si=tX1QnMcha9K2v39s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
					'<iframe src="https://www.youtube.com/embed/f6dXahYyrZQ?si=AchQ4ud9dy_tZemC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
					'<iframe src="https://www.youtube.com/embed/N7Z39rhKSok?si=Jj50z6DWTZO5evnt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
				];

	$(document).on('click','.play',function(){  
		var attr_data_id = $(this).attr('data_id'); 
		for (let index = 0; index < data_arr.length; index++) {
			 if(attr_data_id == index){ 
				$('.popup-video').html(data_arr[index]);
			 }
		}
		$('.popup-video').css({'display':'flex'});
		$('.popup_overlay').show();
		return false;
	});

	$(document).on('click','.popup_overlay',function(){ 
		$('.popup-video').hide();
		$('.popup_overlay').hide();
		return false;
	});

	var burger_count = 0;
	$(document).on('click','.burger',function(){ 
		if(burger_count == 0){ 
			$(this).addClass('is-active');
			$('.menu').addClass('is-active'); 

			burger_count = 1;
		}else{
			$(this).removeClass('is-active');
			$('.menu').removeClass('is-active'); 

			burger_count = 0;
		} 
 

		return false;
	});
	$(document).on('click','.mobile_bars',function(){   
		$('.menu').slideToggle(); 
		return false;
	});


	$(document).on('click','.show_give_data ul li a',function(){
		var show_give_data = $(this).html();

		$('.donate_input input').val(show_give_data); 
	});	

	$(document).on('click','.donate_times',function(){ 
		$('.donate_popup').hide(); 
	});	

	$(document).on('click','.donate_btn a, .donate_fixed_btn a , .donate_modal_btn',function(){ 
		$('.donate_popup').show(); 

		return false;
	});	

	$('.counter').counterUp({
		delay: 10,
		time: 2000
	  });
	  $('.counter').addClass('animated fadeInDownBig');
	  $('h3').addClass('animated fadeIn');

	    

	
	
	



});


$('a[href^="#"]').on('click', function(event) {
	var target = $(this.getAttribute('href'));
	if (target.length) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000);
	}
});

var urlHash = window.location.hash;
if (urlHash) {
	var target = $(urlHash);
	if (target.length) {
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000);
	}
}