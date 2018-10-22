console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding Note ', title, body);
};

var getAll = () => {
    console.log('Getting All notes');
}

var getNote = (title) => {
    console.log(title, 'Body');
}
var remove = (title) => {
    console.log('Removing note', title)
}
module.exports = {
    addNote,
    getAll,
    getNote,
    remove
};