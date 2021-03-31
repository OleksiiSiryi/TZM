productTree = {
    Їжа: {
        Овочі: {},
        Фрукти: {},
        Напої: {},
        Кулінарія: {}
    },
    Одяг: {
        Штани: {
            Жіночі: {},
            Чоловічі: {},
            'Дитячі (дівчинка)': {},
            'Дитячі (хлопчик)': {}
        },
        Сорочки: {
            Жіночі: {},
            Чоловічі: {},
            'Дитячі (дівчинка)': {},
            'Дитячі (хлопчик)': {}
        },
        Светри: {
            Жіночі: {},
            Чоловічі: {},
            'Дитячі (дівчинка)': {},
            'Дитячі (хлопчик)': {}
        },
        Взуття: {
            Жіночі: {},
            Чоловічі: {},
            'Дитячі (дівчинка)': {},
            'Дитячі (хлопчик)': {}
        },
        Шкарпетки: {
            Жіночі: {},
            Чоловічі: {},
            'Дитячі (дівчинка)': {},
            'Дитячі (хлопчик)': {}
        }
    },
    Житло: {
        Меблі: {},
        Сантехніка: {},
        'Побутові прилади': {}
    },
    Техніка: {
        'Транспортна техніка': {
            'Легкові автомобілі': {},
            Мотоцикли: {},
            Автобуси: {},
            Велосипеди: {}
        },
        'Промислова техніка': {
            'Сільськогосподарська техніка': {
                'Трактори': {
                    name: 'Трактори',
                    link: 'tractors.html'
                },
                'Комбайни': {},
                'Телескопічні навантажувачі': {},
                'Оприскувачі': {},
                'Сівалки': {},
                'Розкидачі добрив': {},
                'Плуги': {},
                'Культиватори': {},
                'Борони': {}
            },
            'Будівельна техніка': {},
            'Техніка для лісозаготівлі': {},
            'Техніка для комунальних робіт': {},
            "Техніка для кар'єрів": {}
        },
    },
    'Побутові прилади': {},
    'Промислове обладнання': {},
    Ліки: {},
    Сантехніка: {},
    'Побутові товари': {
        'Товари гігієни': {
            Мило: {},
            Шампунь: {},
            'Туалетний папір':{},
        },
        'Миючі засоби': {},
        Канцелярія: {},
    }
}

function fillOptions(productTree, select) {
    products = []
    for (product in productTree) {
        products.push(product)
    }
    select.innerHTML = ""
    for (i=0; i<products.length; i++) {
        select.innerHTML += '<option>' + products[i] + '</option>'
    } 
} 
fillOptions(productTree, select1)
// fillOptions(productTree.Техніка, select2)
// fillOptions(productTree.Техніка["Промислова техніка"], select3)
// fillOptions(productTree.Техніка['Промислова техніка']["Сільськогосподарська техніка"], select4)

select1.onchange = function () {
    fillOptions(productTree[select1.value], select2) 
    select3.innerHTML = ''
    select4.innerHTML = ''
}
select2.onchange = function () {
    fillOptions(productTree[select1.value][select2.value], select3)
    select4.innerHTML = ''
}
select3.onchange = function () {
    fillOptions(productTree[select1.value][select2.value][select3.value], select4)
}
select4.onchange = function () {
    location.href = productTree[select1.value][select2.value][select3.value][select4.value].link
}
