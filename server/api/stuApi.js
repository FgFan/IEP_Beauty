var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');


const path = require('path');
const fs = require('fs');


//返回一个随机字母数字
function getCharacter(flag){
  var character = "";
  if(flag === 0){
    character = String.fromCharCode(Math.floor( Math.random() * 26) + "a".charCodeAt(0));
  }
  if(flag === 1){
    character = String.fromCharCode(Math.floor( Math.random() * 26) + "A".charCodeAt(0));
  }
  if(flag === 2){
    character = Math.round(Math.random()*9);
  }
  return character;
}

//获取当前日期
function getDate(){
// 获取当前日期
  var date = new Date();

// 获取当前月份
  var nowMonth = date.getMonth() + 1;

// 获取当前是几号
  var strDate = date.getDate();

// 添加分隔符“-”
  var seperator = "-";

// 对月份进行处理，1-9月在前面添加一个“0”
  if (nowMonth >= 1 && nowMonth <= 9) {
    nowMonth = "0" + nowMonth;
  }

// 对月份进行处理，1-9号在前面添加一个“0”
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }

// 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
  var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;

  return nowDate;
}


//图片上传
var multipart = require('connect-multiparty');
var ZhuanXiang = multipart({
  uploadDir:'../../uploadPic/uploadPic_ZhuanXiang/'
});
var ZhenDuan = multipart({
  uploadDir:'../../uploadPic/uploadPic_ZhenDuan/'
});
var JiTiJX = multipart({
  uploadDir:'../../uploadPic/uploadPic_JiTiJX/'
});
var JiTiJH = multipart({
  uploadDir:'../../uploadPic/uploadPic_JiTiJH/'
});
var GeXunJX = multipart({
  uploadDir:'../../uploadPic/uploadPic_GeXunJX/'
});
var GeXunJH = multipart({
  uploadDir:'../../uploadPic/uploadPic_GeXunJH/'
});
var JXZhuTi = multipart({
  uploadDir:'../../uploadPic/uploadPic_JXZhuTi/'
});
var IEPm = multipart({
  uploadDir:'../../uploadPic/uploadPic_IEP/'
});




router.post('/picture_ZhuanXiang', ZhuanXiang, (req, res) => {
  var newName = '';
  for (var i = 0; i < 24; i++){
    newName += getCharacter(Math.round(Math.random()*3));
  }
  newName += '_'+getDate();
  console.log(req.files.upload);
  var files = req.files.upload;
  files.name = newName+'.'+files.type.split('/')[1];
  let oldpath=files.path;
  let newpath= `../../uploadPic/uploadPic_ZhuanXiang`+"/"+ files.name;
  let fileName = files.name;
  fs.rename(oldpath, newpath, (err) => {
    if (!err) {
      let fangStr = `http://47.110.134.247/integration/uploadPic/uploadPic_ZhuanXiang/${fileName}`;
      res.json({
        "uploaded": true,
        "url": fangStr
      });
    }
  });
});
router.post('/picture_ZhenDuan', ZhenDuan, (req, res) => {
  var newName = '';
  for (var i = 0; i < 24; i++){
    newName += getCharacter(Math.round(Math.random()*3));
  }
  newName += '_'+getDate();
  console.log(req.files);
  var files = req.files.upload;
  files.name = newName+'.'+files.type.split('/')[1];
  let oldpath=files.path;
  let newpath= `../../uploadPic/uploadPic_ZhenDuan`+"/"+ files.name;
  let fileName = files.name;
  fs.rename(oldpath, newpath, (err) => {
    if (!err) {
      let fangStr = `http://47.110.134.247/integration/uploadPic/uploadPic_ZhenDuan/${fileName}`;
      res.json({
        "uploaded": true,
        "url": fangStr
      });
    }
  });
});
router.post('/picture_JiTiJX', JiTiJX, (req, res) => {
  var newName = '';
  for (var i = 0; i < 24; i++){
    newName += getCharacter(Math.round(Math.random()*3));
  }
  newName += '_'+getDate();
  console.log(req.files);
  var files = req.files.upload;
  files.name = newName+'.'+files.type.split('/')[1];
  let oldpath=files.path;
  let newpath= `../../uploadPic/uploadPic_JiTiJX`+"/"+ files.name;
  let fileName = files.name;
  fs.rename(oldpath, newpath, (err) => {
    if (!err) {
      let fangStr = `http://47.110.134.247/integration/uploadPic/uploadPic_JiTiJX/${fileName}`;
      res.json({
        "uploaded": true,
        "url": fangStr
      });
    }
  });
});
router.post('/picture_JiTiJH', JiTiJH, (req, res) => {
  var newName = '';
  for (var i = 0; i < 24; i++){
    newName += getCharacter(Math.round(Math.random()*3));
  }
  newName += '_'+getDate();
  console.log(req.files);
  var files = req.files.upload;
  files.name = newName+'.'+files.type.split('/')[1];
  let oldpath=files.path;
  let newpath= `../../uploadPic/uploadPic_JiTiJH`+"/"+ files.name;
  let fileName = files.name;
  fs.rename(oldpath, newpath, (err) => {
    if (!err) {
      let fangStr = `http://47.110.134.247/integration/uploadPic/uploadPic_JiTiJH/${fileName}`;
      res.json({
        "uploaded": true,
        "url": fangStr
      });
    }
  });
});
router.post('/picture_GeXunJX', GeXunJX, (req, res) => {
  var newName = '';
  for (var i = 0; i < 24; i++){
    newName += getCharacter(Math.round(Math.random()*3));
  }
  newName += '_'+getDate();
  console.log(req.files);
  var files = req.files.upload;
  files.name = newName+'.'+files.type.split('/')[1];
  let oldpath=files.path;
  let newpath= `../../uploadPic/uploadPic_GeXunJX`+"/"+ files.name;
  let fileName = files.name;
  fs.rename(oldpath, newpath, (err) => {
    if (!err) {
      let fangStr = `http://47.110.134.247/integration/uploadPic/uploadPic_GeXunJX/${fileName}`;
      res.json({
        "uploaded": true,
        "url": fangStr
      });
    }
  });
});
router.post('/picture_GeXunJH', GeXunJH, (req, res) => {
  var newName = '';
  for (var i = 0; i < 24; i++){
    newName += getCharacter(Math.round(Math.random()*3));
  }
  newName += '_'+getDate();
  console.log(req.files);
  var files = req.files.upload;
  files.name = newName+'.'+files.type.split('/')[1];
  let oldpath=files.path;
  let newpath= `../../uploadPic/uploadPic_GeXunJH`+"/"+ files.name;
  let fileName = files.name;
  fs.rename(oldpath, newpath, (err) => {
    if (!err) {
      let fangStr = `http://47.110.134.247/integration/uploadPic/uploadPic_GeXunJH/${fileName}`;
      res.json({
        "uploaded": true,
        "url": fangStr
      });
    }
  });
});
router.post('/picture_JXZhuTi', JXZhuTi, (req, res) => {
  var newName = '';
  for (var i = 0; i < 24; i++){
    newName += getCharacter(Math.round(Math.random()*3));
  }
  newName += '_'+getDate();
  console.log(req.files);
  var files = req.files.upload;
  files.name = newName+'.'+files.type.split('/')[1];
  let oldpath=files.path;
  let newpath= `../../uploadPic/uploadPic_JXZhuTi`+"/"+ files.name;
  let fileName = files.name;
  fs.rename(oldpath, newpath, (err) => {
    if (!err) {
      let fangStr = `http://47.110.134.247/integration/uploadPic/uploadPic_JXZhuTi/${fileName}`;
      res.json({
        "uploaded": true,
        "url": fangStr
      });
    }
  });
});
router.post('/picture_IEP', IEPm, (req, res) => {
  var newName = '';
  for (var i = 0; i < 24; i++){
    newName += getCharacter(Math.round(Math.random()*3));
  }
  newName += '_'+getDate();
  console.log(req.files.upload);
  var files = req.files.upload;
  files.name = newName+'.'+files.type.split('/')[1];
  let oldpath=files.path;
  let newpath= `../../uploadPic/uploadPic_IEP`+"/"+ files.name;
  let fileName = files.name;
  fs.rename(oldpath, newpath, (err) => {
    if (!err) {
      let fangStr = `http://47.110.134.247/integration/uploadPic/uploadPic_IEP/${fileName}`;
      res.json({
        "uploaded": true,
        "url": fangStr
      });
    }
  });
});



// //jwt
// var secretOrPrivateKey = "iep+career";
// var tokenIssuer = "njupt@kk";
// var tokenExpire = 60*60*1000;
// //加密
// var jwt = require("jsonwebtoken");
// router.post('/jwt_sign',(req,res)=>{
//   var params = req.body;
//   console.log(params);
//   var content = params.content;
//   var token = jwt.sign(content, secretOrPrivateKey, {
//     expiresIn:tokenExpire,
//     issuer:tokenIssuer,
//     algorithm:'HS256'
//   });
//   console.log("token ：" +token );
//   jsonWrite(res, token);
// });
// //解密
// router.post('/jwt_verify',(req,res)=>{
//   var params = req.body;
//   var token = params.token;
//   console.log(token);
//   var ans = jwt.verify(token, secretOrPrivateKey, {
//    algorithms:['HS256']
//   },function (err, data) {
//     if (err)
//       console.log(err);
//     else {
//       console.log('解析的数据:', data);
//       jsonWrite(res, data);
//     }
//   });
// });
//
//
//
// //连接redis数据库
// var redis   = require('redis');
// var client  = redis.createClient('6379', '127.0.0.1');
// // redis 链接错误
// client.on("error", function(error) {
//   console.log(error);
// });
// //存入数据
// router.post('/RDS_set', (req, res) => {
//   var params = req.body;
//   var key = params.key;
//   var value = params.value;
//   console.log(params);
//   client.hmset(key, value, function (err, result) {
//     if (err) {
//       console.log(err);
//     }
//     if (result) {
//       jsonWrite(res, result);
//     }
//   })
// });
// //读取数据
// router.post('/RDS_get', (req, res) => {
//   var params = req.body;
//   var key = params.key;
//   console.log(params);
//   client.hgetall(key, function (err, result) {
//     if (err) {
//       console.log(err);
//     }
//     if (result) {
//       jsonWrite(res, result);
//     }
//   })
//});



// 连接mysql数据库
var conn = mysql.createConnection(models.mysql);


let query=(sql, callback)=>{
  conn.query(sql, function (err, rows) {
    callback(err, rows);
  });
  // connection.end();//end()的话好像就只能连接一次的样子
};

conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加学生接口
router.post('/addStu', (req, res) => {
  var sql = $sql.stu.add;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.sStuID, params.sClass, params.sName, params.sSex, params.sBirthday, params.sID, params.sOrigin, params.sPermanentAddress, params.sHomeAddress,
    params.sGraduatedSchool_name, params.sGraduatedSchool_address, params.sLastSchool_name, params.sLastSchool_address, params.sDisabilityCertificate_issueDate, params.sDisabilityCertificate_number,
    params.sDisabilityCertificate_validity, JSON.stringify(params.sDisability_type), params.sDisability_level, JSON.stringify(params.sEducationalSetting), JSON.stringify(params.sSpecialIllnessOrOthers), JSON.stringify(params.sMainCaregiver),
    JSON.stringify(params.sParentsPS), /*params.sParentsPS_proofMaterials,*/ params.sRelativesPS,
    params.sStuResident, params.sSojournRela,  params.sEmergencyContact1_name, params.sEmergencyContact1_rela, params.sEmergencyContact1_birth, params.sEmergencyContact1_degree, params.sEmergencyContact1_job, params.sEmergencyContact1_health, params.sEmergencyContact1_tel,
    params.sEmergencyContact2_name, params.sEmergencyContact2_rela, params.sEmergencyContact2_birth, params.sEmergencyContact2_degree, params.sEmergencyContact2_job, params.sEmergencyContact2_health, params.sEmergencyContact2_tel,
    params.sEmergencyContact3_name, params.sEmergencyContact3_rela, params.sEmergencyContact3_birth, params.sEmergencyContact3_degree, params.sEmergencyContact3_job, params.sEmergencyContact3_health, params.sEmergencyContact3_tel,
    params.sFamilyFinancialSituation, params.sParentsMarriageSituation, params.sUsualLanguage, params.sResidentialEnvironment, params.sFamilyEnvironment, params.sFamilyAttitude2Stu, params.sSleepPattern,
    params.sLivingHabit, params.sIQ, JSON.stringify(params.sFamilyMember), params.sFamilyMember_obro, params.sFamilyMember_ybro, params.sFamilyMember_osis, params.sFamilyMember_ysis, params.sFamilyMember_livetogether,
    params.sWorkChance1_name, params.sWorkChance1_address, params.sWorkChance1_tel, params.sWorkChance1_jobDescription, params.sWorkChance1_transport,
    params.sWorkChance2_name, params.sWorkChance2_address, params.sWorkChance2_tel, params.sWorkChance2_jobDescription, params.sWorkChance2_transport,
    params.sWorkChance3_name, params.sWorkChance3_address, params.sWorkChance3_tel, params.sWorkChance3_jobDescription, params.sWorkChance3_transport,
    params.sWorkChance4_name, params.sWorkChance4_address, params.sWorkChance4_tel, params.sWorkChance4_jobDescription, params.sWorkChance4_transport,
    params.sWorkChance5_name, params.sWorkChance5_address, params.sWorkChance5_tel, params.sWorkChance5_jobDescription, params.sWorkChance5_transport,
    JSON.stringify(params.sRelProject)], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//删除学生接口
router.post('/delStu', (req, res) => {
  var sql = $sql.stu.delStu;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.dStuID], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

// 修改学生信息接口
router.post('/upStu', (req, res) => {
  var sql = $sql.stu.updateStu;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.sStuID, params.sClass, params.sName, params.sSex, params.sBirthday, params.sID, params.sOrigin, params.sPermanentAddress, params.sHomeAddress,
    params.sGraduatedSchool_name, params.sGraduatedSchool_address, params.sLastSchool_name, params.sLastSchool_address, params.sDisabilityCertificate_issueDate, params.sDisabilityCertificate_number,
    params.sDisabilityCertificate_validity, JSON.stringify(params.sDisability_type), params.sDisability_level, JSON.stringify(params.sEducationalSetting), JSON.stringify(params.sSpecialIllnessOrOthers), JSON.stringify(params.sMainCaregiver),
    JSON.stringify(params.sParentsPS), /*params.sParentsPS_proofMaterials,*/ params.sRelativesPS,
    params.sStuResident, params.sSojournRela, params.sEmergencyContact1_name, params.sEmergencyContact1_rela, params.sEmergencyContact1_birth, params.sEmergencyContact1_degree, params.sEmergencyContact1_job, params.sEmergencyContact1_health, params.sEmergencyContact1_tel,
    params.sEmergencyContact2_name, params.sEmergencyContact2_rela, params.sEmergencyContact2_birth, params.sEmergencyContact2_degree, params.sEmergencyContact2_job, params.sEmergencyContact2_health, params.sEmergencyContact2_tel,
    params.sEmergencyContact3_name, params.sEmergencyContact3_rela, params.sEmergencyContact3_birth, params.sEmergencyContact3_degree, params.sEmergencyContact3_job, params.sEmergencyContact3_health, params.sEmergencyContact3_tel,
    params.sFamilyFinancialSituation, params.sParentsMarriageSituation, params.sUsualLanguage, params.sResidentialEnvironment, params.sFamilyEnvironment, params.sFamilyAttitude2Stu, params.sSleepPattern,
    params.sLivingHabit, params.sIQ, JSON.stringify(params.sFamilyMember), params.sFamilyMember_obro, params.sFamilyMember_ybro, params.sFamilyMember_osis, params.sFamilyMember_ysis, params.sFamilyMember_livetogether,
    params.sWorkChance1_name, params.sWorkChance1_address, params.sWorkChance1_tel, params.sWorkChance1_jobDescription, params.sWorkChance1_transport,
    params.sWorkChance2_name, params.sWorkChance2_address, params.sWorkChance2_tel, params.sWorkChance2_jobDescription, params.sWorkChance2_transport,
    params.sWorkChance3_name, params.sWorkChance3_address, params.sWorkChance3_tel, params.sWorkChance3_jobDescription, params.sWorkChance3_transport,
    params.sWorkChance4_name, params.sWorkChance4_address, params.sWorkChance4_tel, params.sWorkChance4_jobDescription, params.sWorkChance4_transport,
    params.sWorkChance5_name, params.sWorkChance5_address, params.sWorkChance5_tel, params.sWorkChance5_jobDescription, params.sWorkChance5_transport,
    JSON.stringify(params.sRelProject),params.ssid], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//查询指定学生所有信息
router.post('/queryStuinfo', (req, res) => {
  var sql = $sql.stu.queStuinfo;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.AStuID], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//查询学生接口
router.post('/queryStu', (req, res) => {
  var sql = $sql.stu.queName;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.dName], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//查询班级学生信息接口
router.post('/queryClass', (req, res) => {
  var sql = $sql.stu.queClass;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.class_id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取学校选项接口
router.post('/querySch', (req, res) => {
  var sql = $sql.stu.queSch;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取学生简洁信息
router.post('/queStuNNS', (req, res) => {
  var sql = $sql.stu.queStu;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

// 初始化医学诊断
router.post('/MDini', (req, res) => {
  var sql = $sql.stu.addMD;
  var params = req.body;
  console.log(params);
  conn.query(sql, [JSON.stringify(params.MD), params.MDID], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
// 初始化家庭基本信息
router.post('/HBIini', (req, res) => {
  var sql = $sql.stu.addHBI;
  var params = req.body;
  console.log(params);
  conn.query(sql, [JSON.stringify(params.HBI), params.HBIID], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
// 初始化专项评估
router.post('/Eini', (req, res) => {
  var sql = $sql.stu.addE;
  var params = req.body;
  console.log(params);
  conn.query(sql, [JSON.stringify(params.E), params.EID], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
//初始化全部指标信息
router.post('/ATIini', (req, res) => {
  var sql = $sql.stu.addATI;
  var params = req.body;
  console.log(params);
  conn.query(sql, [JSON.stringify(params.ATI), params.ATIID], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});


//指标信息初始化标置1
router.post('/setIni1', (req, res) => {
  var sql = $sql.stu.upIni1;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.StuID], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});




/******************课程评量**********************/
//获取学生课表
router.post('/queSchedule',(req, res) => {
  var sql = $sql.stu.queSchedule;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取课程信息
router.post('/queCourse',(req, res) => {
  var sql = $sql.stu.queCourse;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//清空学生课程信息
router.post('/stuCourseCl',(req, res) => {
  var sql = $sql.stu.stuCourseCl;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.stuID], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//更新学生课程信息
router.post('/upStuCourse',(req, res) => {
  var sql = $sql.stu.upStuCourse;
  var params = req.body;
  console.log(params);
  conn.query(sql, [JSON.stringify(params.Course),params.stuID], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//查询学生课程信息
router.post('/queStuCourse',(req, res) => {
  var sql = $sql.stu.queStuCourse;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
/***********************************************/






/*****************IEP会议**********************/
//获取iep会议列表信息
router.post('/queIepMeeting',(req, res) => {
  var sql = $sql.stu.queIepMeeting;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取对应iep会议信息
router.post('/queFullIepMeeting',(req, res) => {
  var sql = $sql.stu.queFullIepMeeting;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//新建iep会议
router.post('/addIepMeeting',(req, res) => {
  var sql = $sql.stu.addIepMeeting;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear,params.term,params.stuName,params.stuID,params.creator,params.date,params.summary], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//更新iep会议信息
router.post('/upIepMeeting',(req, res) => {
  var sql = $sql.stu.upIepMeeting;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear,params.term,params.stuName,params.stuID,params.creator,params.date,params.summary,params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//删除iep会议信息
router.post('/delIepMeeting',(req, res) => {
  var sql = $sql.stu.delIepMeeting;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
/***********************************************/





/****************集体学科计划*******************/
//获取集体学科计划列表信息
router.post('/queGroupSbjPlan',(req, res) => {
  var sql = $sql.stu.queGroupSbjPlan;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取课标选项
router.post('/queSS',(req, res) => {
  var sql = $sql.stu.queSS;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.show_type, params.father, params.producerID], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.post('/queSS_ST',(req, res) => {
  var sql = $sql.stu.queSS_ST;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.show_type, params.producerID], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取对应集体学科计划信息
router.post('/queFullGroupSbjPl',(req, res) => {
  var sql = $sql.stu.queFullGroupSbjPl;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//新建集体学科计划
router.post('/addGroupSbjPl',(req, res) => {
  var sql = $sql.stu.addGroupSbjPl;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear,params.term,params.class,params.subject,params.teacher,params.createDate,params.updateDate,JSON.stringify(params.teachingPlan),JSON.stringify(params.teachingProgress)], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//更新集体学科计划信息
router.post('/upGroupSbjPl',(req, res) => {
  var sql = $sql.stu.upGroupSbjPl;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear,params.term,params.class,params.subject,params.teacher,params.createDate,params.updateDate,JSON.stringify(params.teachingPlan),JSON.stringify(params.teachingProgress),params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//删除集体学科计划信息
router.post('/delGroupSbjPl',(req, res) => {
  var sql = $sql.stu.delGroupSbjPl;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
/***********************************************/






/****************个训学科计划*******************/
//获取个训学科计划列表信息
router.post('/queTrainingSbjPlan',(req, res) => {
  var sql = $sql.stu.queTrainingSbjPlan;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取对应个训学科计划信息
router.post('/queFullTrainingSbjPl',(req, res) => {
  var sql = $sql.stu.queFullTrainingSbjPl;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//新建个训学科计划
router.post('/addTrainingSbjPl',(req, res) => {
  var sql = $sql.stu.addTrainingSbjPl;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear,params.term,params.class,params.stuName,params.student_info,params.subject,params.teacher,params.createDate,params.updateDate,JSON.stringify(params.teachingPlan),JSON.stringify(params.teachingProgress)], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//更新个训学科计划信息
router.post('/upTrainingSbjPl',(req, res) => {
  var sql = $sql.stu.upTrainingSbjPl;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear,params.term,params.class,params.stuName,params.student_info,params.subject,params.teacher,params.createDate,params.updateDate,JSON.stringify(params.teachingPlan),JSON.stringify(params.teachingProgress),params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//删除个训学科计划信息
router.post('/delTrainingSbjPl',(req, res) => {
  var sql = $sql.stu.delTrainingSbjPl;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
/***********************************************/



/********************长短期目标********************/
//获取对应班级的集体学科计划
router.post('/queClassGSP',(req, res) => {
  var sql = $sql.stu.queClassGSP;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear, params.subject, params.class_id, params.term, params.teacher], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取对应班级的个训学科计划
router.post('/queClassTSP',(req, res) => {
  var sql = $sql.stu.queClassTSP;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear, params.subject, params.class_id, params.term, params.teacher], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取教学主题列表信息
router.post('/queTeachingTheme',(req, res) => {
  var sql = $sql.stu.queTeachingTheme;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取对应教学主题信息
router.post('/queFullTeachingTheme',(req, res) => {
  var sql = $sql.stu.queFullTeachingTheme;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//新建教学主题
router.post('/addTeachingTheme',(req, res) => {
  var sql = $sql.stu.addTeachingTheme;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.course,params.theme,params.schoolYear,params.term,params.month,params.mainTeacher,params.aidTeacher,params.class,JSON.stringify(params.timeArrange),JSON.stringify(params.teachingAim),JSON.stringify(params.details),JSON.stringify(params.teachingProcess)], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//更新教学主题信息
router.post('/upTeachingTheme',(req, res) => {
  var sql = $sql.stu.upTeachingTheme;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.course,params.theme,params.schoolYear,params.term,params.month,params.mainTeacher,params.aidTeacher,params.class,JSON.stringify(params.timeArrange),JSON.stringify(params.teachingAim),JSON.stringify(params.details),JSON.stringify(params.teachingProcess),params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//删除教学主题信息
router.post('/delTeachingTheme',(req, res) => {
  var sql = $sql.stu.delTeachingTheme;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
/***********************************************/



/****************集体学科教学********************/
//获取集体学科教学列表信息
router.post('/queGroupSbjIns',(req, res) => {
  var sql = $sql.stu.queGroupSbjIns;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取对应集体学科教学信息
router.post('/queFullGroupSbjIns',(req, res) => {
  var sql = $sql.stu.queFullGroupSbjIns;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//新建集体学科教学
router.post('/addGroupSbjIns',(req, res) => {
  var sql = $sql.stu.addGroupSbjIns;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear,params.term,params.class,params.subject,params.teacher,params.createDate,params.week,params.section,params.topic,JSON.stringify(params.content)], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//更新集体学科教学信息
router.post('/upGroupSbjIns',(req, res) => {
  var sql = $sql.stu.upGroupSbjIns;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear,params.term,params.class,params.subject,params.teacher,params.createDate,params.week,params.section,params.topic,JSON.stringify(params.content),params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//删除集体学科教学信息
router.post('/delGroupSbjIns',(req, res) => {
  var sql = $sql.stu.delGroupSbjIns;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
/***********************************************/






/****************个训学科计划********************/
//获取个训学科教学列表信息
router.post('/queTrainingSbjIns',(req, res) => {
  var sql = $sql.stu.queTrainingSbjIns;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取对应个训学科教学信息
router.post('/queFullTrainingSbjIns',(req, res) => {
  var sql = $sql.stu.queFullTrainingSbjIns;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//新建个训学科教学
router.post('/addTrainingSbjIns',(req, res) => {
  var sql = $sql.stu.addTrainingSbjIns;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear,params.term,params.class,params.stuName,params.subject,params.teacher,params.createDate,params.week,params.section,params.topic,JSON.stringify(params.content)], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//更新个训学科教学信息
router.post('/upTrainingSbjIns',(req, res) => {
  var sql = $sql.stu.upTrainingSbjIns;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear,params.term,params.class,params.stuName,params.subject,params.teacher,params.createDate,params.week,params.section,params.topic,JSON.stringify(params.content),params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//删除个训学科教学信息
router.post('/delTrainingSbjIns',(req, res) => {
  var sql = $sql.stu.delTrainingSbjIns;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
/***********************************************/





/****************学习报表********************/
//获取学习报表列表信息
router.post('/queLearningReports',(req, res) => {
  var sql = $sql.stu.queLearningReports;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取已存在学习报表列表信息
router.post('/queExistLR',(req, res) => {
  var sql = $sql.stu.queExistLR;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear,params.term,params.tclass,params.stuInfo,params.teacher], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//获取对应学习报表信息
router.post('/queFullLR',(req, res) => {
  var sql = $sql.stu.queFullLR;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//新建学习报表
router.post('/addLearningReports',(req, res) => {
  var sql = $sql.stu.addLearningReports;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear, params.term, params.class, params.stuName, params.stuInfo, JSON.stringify(params.months)], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//更新学习报表信息
router.post('/upLearningReports',(req, res) => {
  var sql = $sql.stu.upLearningReports;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear, params.term, params.class, params.stuName, params.stuInfo, JSON.stringify(params.months), params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//删除学习报表信息
router.post('/delLearningReports',(req, res) => {
  var sql = $sql.stu.delLearningReports;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//查询对应学生短期目标
router.post('/queFullTSP4LR',(req, res) => {
  var sql = $sql.stu.queFullTSP4LR;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolYear, params.term, params.class, params.stuName], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
/***********************************************/


//从用户列表中获取学校教师信息
router.post('/queSchoolTeachers',(req, res) => {
  var sql = $sql.stu.queSchoolTeachers;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.school], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//查询学科信息
router.post('/queSubject',(req, res) => {
  var sql = $sql.stu.queSubject;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//查询班级
router.post('/queClasstable',(req, res) => {
  var sql = $sql.stu.queClasstable;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.schoolName], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});


module.exports = router;
