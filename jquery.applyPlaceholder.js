$(document).ready(function(){
    (function($){
    
        //placeholderが使えるかチェック
        if( 'placeholder' in document.createElement('input') ) return false;
    
        //input textarea 要素からplaceholderの値を取得
        var o = $('input[type="text"],input[type="number"],input[type="tel"],input[type="email"],input[type="url"],textarea');
        var data = {};
    
        o.each(function(){
            //初期設定
            $.data(this, 'placeholder', $(this).attr('placeholder'));
            $(this).val($(this).attr('placeholder'));
    
            //focus時
            $(this).bind('focus', function(){
                if($(this).val() == $.data(this, 'placeholder')) $(this).val('');
            });
    
            //blur時
            $(this).bind('blur',function(){
                if($(this).val() == '') $(this).val($.data(this, 'placeholder'));
            });
        });
    
        //submit時
        //直近のform要素submit時に、placeholderと同じ内容がvalue値の時は空にする
        o.closest('form').bind('submit', function(){
            o.each(function() {
                if($(this).val() == $.data(this,'placeholder')) $(this).val('');
            });
        });
    
    })(jQuery);
});
