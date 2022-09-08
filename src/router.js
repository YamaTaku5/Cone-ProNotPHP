import Vue from 'vue';
import Router from 'vue-router';
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import Method from "./components/UseMethod.vue";
import OpinionBox from "./components/OpinionBox.vue";
import FormConfirmation from "./components/FormConfirmation.vue";
import Question from "./components/Question.vue";
import QuestionConfirmation from "./components/QuestionConfirmation.vue";
// import Comment from "./views/Comment.vue";
// import SearchResult from "./components/SearchResult.vue"
import OutputField from "./components/OutputField.vue"
import OutputWrite from "./components/OutputWrite.vue"
import OutputSee from "./components/OutputSee.vue"
// import OutputCreateAccount from "./components/OutputCreateAccount.vue"
// import test from "./components/test.vue"

Vue.use(Router);
export default new Router({
    mode: "history",
    props: {default: true},
    routes:[
        {
          path: "/",
          name: "home",
          components: {default: Home, header:Header}
        },
        {
          path: "/form",
          components: {default: Form, header: Header}
        },
        {
          path: "/method", 
          components: {default: Method, header: Header}
        },
        {
          path: "/opinionbox", 
          components: {default: OpinionBox, header: Header}
        },
        {
          path: "/question", 
          components: {default: Question, header: Header}
        },
        {
          path: "/question/confirmation", 
          name:"QuestionConfirmation", 
          components: {default: QuestionConfirmation, header: Header}, 
          props: route => 
          ({questionLanguage:route.params.questionLanguage,questionDetail:route.params.questionDetail,questionName:route.params.questionName})
        }, 
        {
        path: "/form/confirmation", 
        name:"FormConfirmation", 
        components: {default: FormConfirmation, header: Header}, 
        props: route => 
        ({name:route.params.name, email:route.params.email,devision:route.params.division,date:route.params.date, language:route.params.language,detail:route.params.detail})
        },
        // {
        //   path: "/questionDetail/:name",
        //   name: "comment",
        //   components: {default: Comment, header:Header},
        //   props: true
        // },
        // {
        //   path: "/search/:searchKeyword",
        //   name: "searchResult",
        //   components: {default: SearchResult, header: Header},
        //   props: true
        // },
        {
          path: "/output",
          name: "outputField",
          components: {default: OutputField, header: Header},
          props: true
        },
        {
          path: "/output/:id",
          name: "outputWrite",
          components: {default: OutputWrite, header: Header},
        },
        {
          path: "/output/see",
          name: "outputSee",
          components: {default: OutputSee, header: Header}
        },
        // {
        //   path: "/output/create",
        //   name: "outputCreateAccount",
        //   components: {default: OutputCreateAccount, header: Header}
        // },
        // {
        //   path: "/test",
        //   name: "test",
        //   components: {default: test, header: Header}
        // },
    ]
});