<template>
  <section>
    <el-container>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/groupSubjectTea', query:{currentPage:this.$route.query.currentPage}}">集体学科教学</el-breadcrumb-item>
        <el-breadcrumb-item>查看|编辑</el-breadcrumb-item>
      </el-breadcrumb>
    </el-container>
    <el-divider></el-divider>
    <el-container>
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
        <el-form :inline="true"  align="left" >
          <el-form-item label="学年">
            <el-select v-model="schoolYear" placeholder="请选择" :disabled="disabled">
              <el-option
                  v-for="item in schoolYear_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学期">
            <el-select v-model="term" placeholder="请选择" :disabled="disabled">
              <el-option
                  v-for="item in term_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="班级">
            <el-select v-model="tclass" placeholder="请选择" :disabled="disabled">
              <el-option
                  v-for="item in class_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学科">
            <el-select v-model="subject" placeholder="请选择" :disabled="disabled">
              <el-option
                  v-for="item in subject_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="任教老师">
            <el-select v-model="teacher" placeholder="请选择" :disabled="disabled">
              <el-option
                  v-for="item in teacher_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="制定日期">
            <el-date-picker align="left" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" :disabled="disabled" v-model="createDate"></el-date-picker>
          </el-form-item>
          <el-form-item label="周次">
            <el-select v-model="week" placeholder="请选择" :disabled="disabled">
              <el-option
                  v-for="item in week_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="节次">
            <el-input align="left"  :disabled="disabled" v-model="section"></el-input>
          </el-form-item>
          <el-form-item label="课题">
            <el-input align="left"  :disabled="disabled" v-model="topic"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-container>
    <el-divider></el-divider>
    <div>
            <vue-ckeditor style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)" type="classic"  v-model="content" :editors="editors1"
                          :config='config' :readonly="tmdisabled"></vue-ckeditor>
    </div>
    <el-divider></el-divider>
    <el-form :inline="true" align="center">
      <el-form-item>
        <el-button type="danger" @click.native="jt_submit()" :disabled="disabled">提交</el-button>
        <el-button type="danger" @click.native="go_back()">返回</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
    import VueCkeditor from 'vue-ckeditor5'
    import ClassicEditor from '@ckeditor/ckeditor5-build-balloon-block'
    import '@ckeditor/ckeditor5-build-balloon-block/build/translations/zh-cn'
    export default {
        name: "jitixuekejiaoxue_edit",
        components:{'vue-ckeditor': VueCkeditor.component},
        data(){
            let that = this;
            return{
                schoolYear:'',
                term:'',
                tclass:'',
                subject:'',
                teacher:'',
                createDate:'',
                week:'',
                section:'',
                topic:'',
                content:'',


                term_options: [{value: '上学期', label: '上学期'},
                    {value: '下学期', label: '下学期'}],
                schoolYear_options: [],
                week_options: [{value: '第1周' , label: '第1周' },{value: '第2周', label: '第2周'},{value: '第3周', label: '第3周'},{value: '第4周', label: '第4周'},{value: '第5周', label: '第5周'},
                    {value: '第6周' , label: '第6周' },{value: '第7周', label: '第7周'},{value: '第8周', label: '第8周'},{value: '第9周', label: '第9周'},{value: '第10周', label: '第10周'},
                    {value: '第11周', label: '第11周'},{value: '第12周', label: '第12周'},{value: '第13周', label: '第13周'},{value: '第14周', label: '第14周'},{value: '第15周', label: '第15周'},
                    {value: '第16周', label: '第16周'},{value: '第17周', label: '第17周'},{value: '第18周', label: '第18周'},{value: '第19周', label: '第19周'},{value: '第20周', label: '第20周'},
                    {value: '第21周', label: '第21周'}],
                class_options:[],
                teacher_options:[],
                subject_options:[],



                disabled:true,
                tmdisabled:false,


                editors1: {
                    classic: ClassicEditor,
                },
                config:{
                    language:'zh-cn',
                    placeholder:'点击此处编辑',
                    ckfinder: {
                        uploadUrl: '/api/stu/picture_JiTiJX'
                    },
                },
            }
        },
        mounted(){
            if(this.$route.query.isEdit == 1) {
                this.disabled = false;
                this.tmdisabled = false;
                this.readGroupSI();
            }else if (this.$route.query.isEdit == 2){
                this.disabled = true;
                this.tmdisabled = true;
                this.readGroupSI();
            }else {
                this.disabled = false;
                this.tmdisabled = false;
                this.init_options();
            }
        },
        methods:{
            init_options(){
              this.$http.post('/api/stu/queSchoolTeachers', {
                school:"苏州工业园区仁爱学校"
              },{}).then((response) => {
                console.log(response);
                for (var i = 0; i < response.body.length; i++) {
                  this.teacher_options.push({value:response.body[i].userName, label:response.body[i].userName, id:response.body[i].id});
                }
              });
              this.querySubject();
              this.queryClasstable();
              //初始化学年选项
              var year = new Date().getFullYear();
              this.schoolYear_options.push({key:0, value:(year+1)+'-'+(year+2), label:(year+1)+'-'+(year+2)});
              this.schoolYear_options.push({key:1, value:year+'-'+(year+1), label:year+'-'+(year+1)});
              for (var i = 2; ; i++)
                if (year-i+1 >= 2019)
                  this.schoolYear_options.push({key:i, value:(year-i+1)+'-'+(year-i+2), label:(year-i+1)+'-'+(year-i+2)});
                else
                  break;
            },

            readGroupSI(){
                this.schoolYear = this.$store.state.groupSI[0].schoolYear;
                this.term = this.$store.state.groupSI[0].term;
                this.tclass = this.$store.state.groupSI[0].class;
                this.subject = this.$store.state.groupSI[0].subject;
                this.teacher = this.$store.state.groupSI[0].teacher;
                this.createDate = this.$store.state.groupSI[0].createDate;
                this.week = this.$store.state.groupSI[0].week;
                this.section = this.$store.state.groupSI[0].section;
                this.topic = this.$store.state.groupSI[0].topic;
                this.content = JSON.parse(this.$store.state.groupSI[0].content).content;

                this.init_options();
            },

            queryClasstable(){
                this.class_options = [];
                this.$http.post('/api/stu/queClasstable', {
                    schoolName: "苏州工业园区仁爱学校",
                }, {}).then((response) => {
                    for (var i = 0; i < response.body.length; i++){
                        var opt = {};
                        opt.value = response.body[i].className;
                        opt.label = response.body[i].className;
                        this.class_options.push(opt);
                    }
                })
            },

            querySubject(){
                this.subject_options = [];
                this.$http.post('/api/stu/queSubject', {}, {}).then((response) => {
                    for (var i = 0; i < response.body.length; i++){
                        var opt = {};
                        opt.value = response.body[i].subjectName;
                        opt.label = response.body[i].subjectName;
                        this.subject_options.push(opt);
                    }
                })
            },

            go_back(){
              this.$router.replace({path:'/groupSubjectTea', query:{currentPage: this.$route.query.currentPage}});
            },

            jt_submit(){
                var c = {content:this.content};
                if(this.$route.query.isEdit == 1 || this.$route.query.isEdit == 2) {
                    this.$http.post('/api/stu/upGroupSbjIns',{
                        schoolYear:this.schoolYear,
                        term:this.term,
                        class:this.tclass,
                        subject:this.subject,
                        teacher:this.teacher,
                        createDate:this.createDate,
                        week:this.week,
                        section:this.section,
                        topic:this.topic,
                        content:c,
                        id:this.$store.state.groupSI[0].id,
                    },{}).then((response)=>{
                        console.log(response);
                    })
                    console.log('success!');
                    this.$router.replace({path:'/groupSubjectTea', query:{currentPage: this.$route.query.currentPage}});
                }else {
                    this.$http.post('/api/stu/addGroupSbjIns',{
                        schoolYear:this.schoolYear,
                        term:this.term,
                        class:this.tclass,
                        subject:this.subject,
                        teacher:this.teacher,
                        createDate:this.createDate,
                        week:this.week,
                        section:this.section,
                        topic:this.topic,
                        content:c,
                    },{}).then((response)=>{
                        console.log(response);
                    })
                    console.log('success!');
                    this.$router.replace({path:'/groupSubjectTea'});
                }
            },
            getUEContent(){
                let msr = this.$refs.ue.getUEContent();
                console.log(msg)
            }

        },
    }
</script>

<style scoped>
  table.hovertable {
    font-family: verdana,arial,sans-serif;
    font-size:17px;
    color:#333333;
    border-width: 1px;
    border-color: #999999;
    border-collapse: collapse;
  }
  table.hovertable th {
    background-color:#c3dde0;
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #a9c6c9;
  }
  table.hovertable tr {
    background-color:#d4e3e5;
  }
  table.hovertable td {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #a9c6c9;
  }
  .components-container{
    clear: both;

  }
  .editor-container{
    clear: both;

  }
</style>
