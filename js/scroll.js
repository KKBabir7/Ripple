	$(window).scroll(function(){
				$('nav').toggleClass('scrolled', $(this).scrollTop() >80);
				$('nav').toggleClass('scrolledd', $(this).scrollTop() >500);
				$('#topbar').toggleClass('scro', $(this).scrollTop() >80);
				$('#topbar').toggleClass('scrol', $(this).scrollTop() >500);
				
			});
			
