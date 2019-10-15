import VueRouter from 'vue-router'

import index from "../../component/index/index";
import classify from "../../component/classify/classify";
import selective from "../../component/selective/selective";
import phone from "../../component/phone/phone";
import equipment from "../../component/equipment/equipment";
import gmblock from "../../component/gmblock/gmblock";



import regist from "../../component/login/regist";
import detail from "../../component/detail/detail";
import login from "../../component/login/login";
import cart from "../../component/cart/cart";


const router =new VueRouter({
  routes:[
         {path: '/index',component:index,
         meta:{
           title:'国美触屏版'
         }

         },
         {path:'/classify',component: classify,
         meta:{
           title:'全部分类'
         }
         },
         {path:'/selective',component:selective,
         meta:{
           title:'大屏看世界'
         }
         },
         {path:'/phone',component:phone,
         meta:{
           title:'手机电脑'
         }
         },
         {path:'/equipment',component:equipment,
         meta:{
           title:'国美电器'
         }
         },
         {path:'/gmblock',component:gmblock,
         meta:{
           title:'国美易卡'
         }
         },
         {path:'/login',component:login,
         meta:{
           title:'国美用户登录'
         }
         },
         {path:'/regist',component:regist,
         meta:{
           title:'用户注册'
         }
         },
         {path:'/cart',component:cart,
         meta:{
           title:'购物车'
         }
         },
         {path:'/detail/:id',component:detail,
         meta:{
           title:'商品详情'
         }
         },
         {path:'',redirect:'/index'},

  ],

})

router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title
  next()
})

// export default new VueRouter({
//      routes:[
//        {path: '/index',component:index,},
//        {path:'/classify',component: classify},
//        {path:'/selective',component:selective},
//        {path:'/phone',component:phone},
//        {path:'/equipment',component:equipment},
//        {path:'/gmblock',component:gmblock},
//        {path:'/login',component:login},
//        {path:'/regist',component:regist},
//        {path:'/cart',component:cart},
//        {path:'/market',component:market},
//        {path:'/shop',component:shop},


//        {path:'/detail/:id',component:detail},
//        {path:'',redirect:'/index'},


// ]

// })

export default router
