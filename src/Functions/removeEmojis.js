module.exports = function removeEmojis(str) {
    if(!str) return new Error('[ 🔧 ] - Parameter <str> not defined!');
    if(typeof str !== 'string') return new Error('[ 🔧 ] - Parameter <str-string> not set!'); 
    const emojiPattern = /[\u{1F300}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F1E0}-\u{1F1FF}]/gu;
    return str.replace(emojiPattern, '').trim();
}