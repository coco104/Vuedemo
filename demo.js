var app = new Vue({
    el:'#hello',
    data:{
        message:'Hello World!'
    }
})
Vue.component('blog-post',{
    props:['title'],
    template:'<h3>{{ title }}</h3>'
})
new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [
            { id: 1, title: 'vue' },
            { id: 2, title: '学习任务' },
            { id: 3, title: '完成' }
        ]
    }
})
{
    var myComponent = Vue.extend({
        template: "<h3>h3标签</h3>"
    });
//将模板对象注册到组件中
    Vue.component("my-component", myComponent);
    var vm = new Vue({
        el: "#app"
    });
}
{
    Vue.component("my-component",{
        template:"<h3>h3标签</h3>"
    });
    var vm = new Vue({
        el:"#app1"
    });
}
var dongtai = new Vue({
    el: '#dongtai',
    components: {
        com1: {
            template: '<div>组件1</div>'
        },
        com2: {
            template: '<div>组件2</div>'
        },
        com3: {
            template: '<div>组件3</div>'
        }
    },
    data: {
        currentView: 'com1'
    },
    methods: {
        handleChangeView: function(component) {
            this.currentView = 'com' + component;
        }
    }
})

var Home = {
    template: '<p>HAHAHA</p>'
};

var dongtai1 = new Vue({
    el: '#dongtai1',
    data: {
        currentView: Home
    }
})

Vue.component('child-component', function(resolve, reject) {
    window.setTimeout(function() {
        resolve({
            template: '<div>2000ms后异步渲染的</div>'
        })
    }, 2000);
});

var app = new Vue({
    el: '#yibu'
})
