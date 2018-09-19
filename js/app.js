window.app = new Vue({
    el: '#app',
    data: function () {
        return {
            title: '123',
            showUsers: true,
            tooltip: 'Show-Hide button',
            users: [{
                    name: 'One',
                    surname: 'OneSure',
                    patronymic: 'OnePatr',
                    avatar: 'img/not-default-person.jpg'
                },
                {
                    name: 'Two',
                    surname: 'TwoSure',
                    patronymic: 'TwoPatr',
                    avatar: 'img/not-default-person.jpg'
                },
                {
                    name: 'Three',
                    surname: 'ThreeSure',
                    patronymic: 'ThreePatr',
                    avatar: 'img/not-default-person.jpg'
                },
                {
                    name: 'Four',
                    surname: 'FourSure',
                    patronymic: 'FourPatr',
                    avatar: 'img/not-default-person.jpg'
                },
                {
                    name: 'Five',
                    surname: 'FiveSure',
                    patronymic: 'FivePatr'
                }
            ]
        }
    },
    computed: { // вычисляемое свойство
        usersCount: function() {
            return this.users.length;
        }
    },
    watch: { // отслеживание изменений

    },
    methods: { // обработка данных
        showHideUsers: function (event) {
            this.showUsers = !this.showUsers;
        }
    }
})