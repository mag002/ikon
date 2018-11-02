$(document).ready(function () {
    $("#myModal").hide();
    $("#myModalAlbum").hide();
    $("figcaption").click(function (e) { 
        var id=$(this).attr('id');
        var img='<img src="images/'+id+'2.jpg" class="w-100"alt="">';

        $("#myModal").fadeIn();
        $("#myModal").children(".modal-content").children(".row").children(".col-4").html(img);
        e.preventDefault();
        
    });
    // $(".album-thumbnail").hover(function () {
       
    //     $(this).children(".album-img").addClass("d-none");
    //     $(this).children(".album-video").removeClass("d-none"); 
    //     $(this).children(".album-video").children("video")[0].play();
    //     }, function () {
    //         $(this).children(".album-video").children("video")[0].pause();
    //         $(this).children(".album-video").addClass("d-none");
    //         $(this).children(".album-img").removeClass("d-none");
           
    //     }
    // );
    $(".debut-thumbnail").hover(function () {
       
        $(this).children(".debut-img").addClass("d-none");
        $(this).children(".debut-video").removeClass("d-none"); 
        $(this).children(".debut-video").children("video")[0].play();
        }, function () {
            $(this).children(".debut-video").children("video")[0].pause();
            $(this).children(".debut-video").addClass("d-none");
            $(this).children(".debut-img").removeClass("d-none");
           
        }
    );
    $(".nav-link").click(function (e) { 
        var linkHref=$(this).attr('href');
        $('html,body').animate({
            scrollTop:$(linkHref).offset().top
        },1500)
        // alert(linkHref);
        e.preventDefault();
        
    });
    $(window).bind('mousewheel DOMMouseScroll', function(event){
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            console.log("scroll up")
        }
        else {
            console.log("scroll downn")
        }
    });
    $('li > a').click(function() {
        $('li').removeClass();
        $(this).parent().addClass('activeNav');
    });
    $(".slideLeft").hover(function () {
        $(this).children(".album-img").addClass("position-absolute");
        $(this).children(".album-img").children(".img-title").addClass("invisible");
        $(this).children(".album-img").animate({right:'400px'});
        $(this).children(".album-video").removeClass("d-none"); 
        $(this).children(".album-video").children("video")[0].play();
        $(this).children(".album-video"). children("video-song-title").fadeIn();
        }, function () {
            $(this).children(".album-img").removeClass("position-absolute");
            $(this).children(".album-img").children(".img-title").removeClass("invisible");
            $(this).children(".album-img").animate({right:'0px'});
            $(this).children(".album-video").addClass("d-none"); 
            $(this).children(".album-video").children("video")[0].pause();
        }
    );
    $(".slideRight").hover(function () {
        $(this).children(".album-img").addClass("position-absolute");
        $(this).children(".album-img").children(".img-title").addClass("invisible");
        $(this).children(".album-img").animate({left:'400px'});
        $(this).children(".album-video").removeClass("d-none"); 
        $(this).children(".album-video").children("video")[0].play();

        }, function () {
            $(this).children(".album-img").removeClass("position-absolute");
            $(this).children(".album-img").children(".img-title").removeClass("invisible");
            $(this).children(".album-img").animate({left:'0px'});
            $(this).children(".album-video").addClass("d-none"); 
            $(this).children(".album-video").children("video")[0].pause();
        }
    );
    var scrollLink=$(".scroll");
    $(window).scroll(function () { 
        var scrollBarLocation=$(this).scrollTop();
        console.log(scrollBarLocation);
        scrollLink.each(function(){
            var sectionOffset =$(this.hash).offset().top;
            if(sectionOffset<=scrollBarLocation){
                $(this).parent().addClass("activeNav");
                $(this).parent().siblings().removeClass("activeNav");
            }
        });
    });
    // FastClick.attach(document.body);

    // $('#fullpage').fullpage();
    var modal = document.getElementById('myModal');
    var modalAlbum = document.getElementById('myModalAlbum');
    window.onclick = function(event) {
        if (event.target == modalAlbum) {
            $(modalAlbum).fadeOut();
            song.pause();
        }
        if (event.target == modal) {
            $(modal).fadeOut();
        }
    }
    var songs=["KillingMe.mp3","Freedom.mp3","Cocktail.mp3","JustForYou.mp3"];
    var songTitle=document.getElementById("song-title");
    var fillBar=document.getElementById("fill");
    var song=new Audio();
    var currentSong=0;
    // window.onload=playSong(currentSong);
    $(".album-thumbnail").click(function (e) { 
        // var id=$(this).attr('id');
        
        var img='<img src="'+$(this).children(".album-img").children("img").attr('src')+'" class="w-100"alt="">';
   
        $("#myModalAlbum").fadeIn();
        $("#myModalAlbum").children(".modal-content").children(".row").children(".col-5").children(".playlist-img").html(img);
        e.preventDefault();
        playSong(currentSong);
        
    });
    function playSong(currentS){
        song.src="mp3/"+songs[currentS];
        var idSong="#"+currentSong;
        $(idSong).addClass('playing');
        $(idSong).siblings().removeClass('playing');
        // songTitle.textContent=songs[currentS];
        $("#play-btn").html('<i class="far fa-pause-circle">');
        song.play();
        
    }
    $(".s-title").click(function (e) { 
        currentSong=$(this).attr('id');
        playSong(currentSong);
        e.preventDefault();
        
    });

    $("#play-btn").click(function (e) { 
        if(song.paused){
            song.play();
            $(this).html('<i class="far fa-pause-circle">');
        }else{
            song.pause();
            $(this).html('<i class="far fa-play-circle">');
        }
        e.preventDefault();
        
    });
    song.addEventListener('timeupdate',function(){
        var position =song.currentTime / song.duration;

        fillBar.style.width=position*100+'%';

    });
    $("#next-btn").click(function (e) { 
        currentSong++;
        if(currentSong==songs.length){
            currentSong=0;
        }
        playSong(currentSong);
        e.preventDefault();
        
    });
    $("#prev-btn").click(function (e) { 
        
        if(currentSong==0){
            currentSong=songs.length;
        }
        currentSong--;
        playSong(currentSong);
        e.preventDefault();
        
    });
});