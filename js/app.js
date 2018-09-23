
var usersTable = {
    template: '#users-list',
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    methods: {
        inputHandler() {
            console.log('wow')
        }
    }
}

window.app = new Vue({
    components: {
        'usersTable': usersTable,
    },
    el: '#app',
    data: function () {
        return {
            title: '123',
            showUsers: true,
            tooltip: 'Show-Hide button',
            users: []
        }
    },
    computed: { // вычисляемое свойство
        usersCount: function() {
            return this.users.length;
        }
    },
    mounted: function() {
        this.loadUsers();
        console.log('Data is load');
    },
    watch: { // отслеживание изменений

    },
    methods: { // обработка данных
        showHideUsers: function (event) {
            this.showUsers = !this.showUsers;
        },
        loadUsers: function() {
            this.users = [
                {
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
    }
})