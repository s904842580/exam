import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Manager', component: () => import('../views/Manager'),
    children:[
      {path: '/', name:'IndexManager', component: () => import('../views/manager/IndexManager')},
      {path:'scoreQuery', name:'ScoreQuery', component: () => import('../views/manager/ScoreQuery')},
      {path: 'scoreSegment', name:'ScoreSegment', component: () => import('../views/manager/ScoreSegment')},
      {path: 'teacherManager', name:'TeacherManager', component: () => import('../views/manager/TeacherManagement')},
      {path: 'echartsPage', name:'EchartsPage', component: () => import('../views/Echarts/EchartsPage')},
      {path: 'examinationManagement', name: 'ExaminationManagement', component: ()=> import('../views/manager/ExaminationManagement')},
      {path: 'addExamination', name: 'AddExamination', component: ()=> import('../views/manager/AddExamination')},
      {path: 'addStudent', name: 'AddStudent', component: ()=> import('../views/manager/AddStudent')},
      {path: 'studentManager', name: 'StudentManager', component: ()=> import('../views/manager/StudentManager')},
      {path: 'addTeacher', name: 'AddTeacher', component: ()=> import('../views/manager/AddTeacher')},
      {path: 'testManagement', name: 'TestManagement', component: ()=> import('../views/manager/TestManagement')},
      {path: 'addTest', name: 'AddTest', component: ()=> import('../views/manager/AddTest')},

    ]
  },
  {
    path: '/login', name: 'Login', component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
