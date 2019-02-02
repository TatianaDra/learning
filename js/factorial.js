/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var allHashtags = [];
    var uniqHashtags = [];
    var result = '';
    for (var i = 0; i < hashtags.length; i++) {
        hashtags[i] = hashtags[i].toLowerCase();
        allHashtags.push(hashtags[i]);
        uniqHashtags.push(hashtags[i]);
    }

    for (var i = 0; i < allHashtags.length; i++) {
        var newArray = allHashtags[i]
        for (var j = i + 1; j < allHashtags.length - 1; j++) {
            if (allHashtags[i] == allHashtags[j]) {
                uniqHashtags.splice(j, 1);
            }
        }
    }


    var result = uniqHashtags.join(', ');
    return result;

};