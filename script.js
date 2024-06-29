$(document).ready(function() {
    $('.start').click(function(){
        $('.stage1').fadeOut();
        fire_modal('cake_modal.png','Let’s make a cake!','---On Your Birthday Lets make a Cake--- ');
    });

    // Debounced click event for mixer button
    $('.mixer').click(_.debounce(function(){
        if (!mixing) {
            mixing = true;
            mixtimes++;
            $('.mix_spoon img').addClass('move');
            setTimeout(function(){
                $('.mix_spoon img').removeClass('move');
                mixing = false;
            }, 1000);
        }
        if (mixtimes == 1){
            $('.stage2').fadeOut();
            fire_modal('i.png','Mix successful!','Conguratulations Now Next');
        }
    }));

    var progress = 1;

    $('.modal_content button').click(function(){
        progress++;
        close_modal(progress);
    });

    function close_modal(callback){
        var modal = $('.birthday_inner__modal');
        modal.css('transform','translateY(-50%) scale(0)');
        setTimeout(function(){
            $('.stage' + callback).fadeIn();
        }, 600);
    }

    function fire_modal(imgurl, title, content){
        var modal = $('.birthday_inner__modal');
        modal.find('h1').html(title);
        modal.find('img').attr('src', imgurl);
        modal.find('p').html(content);
        setTimeout(function(){
            modal.css('transform','translateY(-50%) scale(1)');
        }, 1000);
    }

    var mixing = false;
    var mixtimes = 0;

    $('.mixer').click(function(){
        if (!mixing) {
            mixing = true;
            mixtimes++;
            $('.mix_spoon img').addClass('move');
            setTimeout(function(){
                $('.mix_spoon img').removeClass('move');
                mixing = false;
            }, 1000);
        }
        if (mixtimes == 1){
            $('.stage2').fadeOut();
            fire_modal('q.png','Mix successful!','Congratulations, the mixture is perfect! .');
        }
    });

    $('.tin').click(function(){
        $('.stage3').fadeOut();
        fire_modal('x.png','Bake successful!','Yes! You are a master chef.');
    });

    var bases = 0;
    var fillings = 0;

    $('.sponges .item_inner').click(function(){
        $('.sponges').addClass('inactive');
        $('.fillings').removeClass('inactive');
        var t = $(this).attr('class').split(' ').pop();
        bases++;
        if (bases < 6){
            add_sponge(t);
        }
    });

    $('.fillings .item_inner').click(function(){
        $('.fillings').addClass('inactive');
        $('.sponges').removeClass('inactive');
        var f = $(this).attr('class').split(' ').pop();
        fillings++;
        if (fillings < 7){
            add_filling(f);
        }
    });

    function add_sponge(t){
        $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="sponge sponge-' + t + '"><div></div><div></div><div></div><div></div><div></div></div>');
        $('.sponges h5 span').html(bases);
    }

    $('.startagain').click(function(){
        $('.cakemake').html('<div class="base"></div>');
        bases = 0;
        fillings = 0;
        $('.sponges h5 span').html(bases);
        $('.fillings h5 span').html(fillings);
        $('.fillings').removeClass('inactive');
        $('.sponges').addClass('inactive');
    });

    function add_filling(f){
        $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="filling filling-' + f + '"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>');
        $('.fillings h5 span').html(fillings);
    }

    function fin(){
        $('h1,h2,.options,.startagain,.add').fadeOut();
        setTimeout(function(){
            $('.cakemake').fadeIn();
            $('.cakemake').animate({'margin-top':'0px'});
        }, 1000);
        add_candle();
        $('svg').addClass('text');
    }

    function add_candle(){
        var stages = $('.cakemake > div').length;
        var h = (stages / 2) * 41 + 22 + 'px';
        $('.cakemake').prepend('<div class="candle"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/candle.png" /></div>');
        $('svg').show();
        setTimeout(function(){
            $('.sa').fadeIn();
        }, 2200);
    }

    $('.add').click(function(){
        fin();
    });

    $('.sa').click(function(){
        window.location.reload();
    });
});
