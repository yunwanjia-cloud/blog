function keep_expend_player() {
    if (!document.getElementById("player").contentWindow.fold) {
        $('#player').contents().find('#btnfold')[0].click();
    }

}
function generate(music_id) {
    music = document.getElementById(music_id);
    index = Number(music_id.replace("song","")) - 1

    poster = document.getElementById("player").contentWindow.musicList[index]['poster']
    title = document.getElementById("player").contentWindow.musicList[index]['title']
    music_time = document.getElementById("player").contentWindow.musicList[index]
    artist = document.getElementById("player").contentWindow.musicList[index]['artist']

    innerHTML = "<li class=\"song_item\"><div class=\"song_item_box\" style=\"visibility: visible;\"><div class=\"song_link mod_cover\" onclick=\"$(\'#player\').contents().find(\'#" + 
    music_id + "\')[0].click(); keep_expend_player();\"><img class=\"song_pic\" src=\"" + 
    poster + "\" style=\"display: block; visibility: visible;\"><i class=\"mod_cover_mask\"></i><i class=\"mod_cover_icon_play js_play\"></i></div><div class=\"song_cont\"><h3 class=\"song_song\"><div class=\"js_song\" title=\"" + 
    title + "\">" + title + "</div></h3><p class=\"song_author\" title=\"" + 
    artist + "\"></p><div title=\"" + artist + "\" class=\"c_tx_thin singer_name\">" + artist + "</div></div></div></li>";

    music.innerHTML = innerHTML;
}
function generate_all() {
    $('.song_item').each(function(){generate($(this).attr('id'))});
}