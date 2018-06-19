'驱动浏览器进行相机出场

WriteLogs("===================出场业务管理模块====================")
WriteLogs("驱动浏览器进行相机触发出场")
SystemUtil.Run "iexplore.exe","http://192.168.10.186"
Wait 3
Browser("登录").Page("登录").WebEdit("WebEdit").Set "888888"
Browser("登录").Page("登录").WebEdit("WebEdit_2").Set "888888"
Wait 1
Browser("登录").Page("登录").Link("登录").Click @@ hightlight id_;_Browser("登录").Page("登录").Link("登录")_;_script infofile_;_ZIP::ssf2.xml_;_
Wait 1
Browser("登录").Page("登录").WebCheckBox("WebCheckBox").Set "ON" @@ hightlight id_;_Browser("登录").Page("登录").WebCheckBox("WebCheckBox")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("登录").Page("登录").Link("Link").Click @@ hightlight id_;_Browser("登录").Page("登录").Link("Link")_;_script infofile_;_ZIP::ssf4.xml_;_
WriteLogs("相机触发完成！") @@ hightlight id_;_4064880_;_script infofile_;_ZIP::ssf16.xml_;_

Wait 1
Dim carCode,inoutType
carCode=SwfWindow("实时监控界面").SwfTable("gridControl1").GetCellData(0,2)
inoutType=SwfWindow("实时监控界面").SwfTable("gridControl1").GetCellData(0,3)
If Len(carCode)>0 and inoutType="出" Then
	WriteLogs(carCode&"出场成功！")
Else
	WriteLogs("出场失败，请检查相应日志！")
End If

'关闭浏览器进程
SystemUtil.CloseProcessByName("iexplore.exe")

'手动缴费放行逻辑
Wait 5
WriteLogs("手动查询缴费出场")
Dim codeTable
codeTable=Datatable.GetSheet("出场业务管理").GetParameter("出场车牌号").ValueByRow(1)
SwfWindow("实时监控界面").SwfEdit("SwfEdit").Set codeTable @@ hightlight id_;_3411374_;_script infofile_;_ZIP::ssf10.xml_;_
SwfWindow("实时监控界面").SwfObject("查询").Click 
Wait 1
SwfWindow("实时监控界面").SwfObject("缴费").Click
 @@ hightlight id_;_592728_;_script infofile_;_ZIP::ssf5.xml_;_