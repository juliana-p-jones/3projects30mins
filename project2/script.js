let data = [
    {
        name: 'Matero',
        age: '30'
    },
    {
        name: 'Sara',
        age: '19'
    },
    {
        name: 'Candace',
        age: '33'
    },
    {
        name: 'Desi',
        age: '26'
    },
    {
        name: 'Marcus',
        age: '22'
    },
    {
        name: 'Amit',
        age: '34'
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
return '<div>' + item.name + ' is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');