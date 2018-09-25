var usersChange = {
    template: '#change-users',
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    mounted: function () {
        this.userRefresh()
    },
    methods: {
        userRefresh: function () {
            console.log('users is refresh')
        }
    }
}

window.app = new Vue({
    components: {
        'usersChange': usersChange
    },
    el: '#app',
    data: function () {
        return {
            title: '123',
            showUsers: true,
            users: []
        }
    },
    computed: { // вычисляемое свойство
        usersCount: function () {
            return this.users.length;
        }
    },
    mounted: function () {
        this.loadUsers();
    },
    watch: { // отслеживание изменений

    },
    methods: { // обработка данных
        showHideUsers: function (event) {
            this.showUsers = !this.showUsers;
        },
        loadUsers: function () {
            this.users = [{
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
            ];
            console.log('Data is load');
        }
    }
})