SwfWindow("视频识别出入口管理系统").SwfObject("实时监控").Click
Wait 1
SwfWindow("视频识别出入口管理系统").SwfObject("btnMenu1").Click
Wait 8
WriteLogs("延时加载实时监控主界面！")

'启动浏览器方式1
WriteLogs("===================进场业务管理模块====================")
SystemUtil.Run "iexplore.exe","http://192.168.10.185"
WriteLogs("驱动浏览器进行相机触发进场")
'启动浏览器方式2
'Set ie=CreateObject("InternetExplorer.Application")
'ie.Visible=true
'Wait 1
'ie.navigate("http://192.168.10.185")
'Set ie=Nothing

'启动浏览器方式3 WScript脚本宿主模式
'Dim oWsh
'Set  oWsh=WScript.CreateObject(WScript.Shell)
'oWsh.Run("http://www.baidu.com")
'Set oWsh=Nothing
Wait 3 @@ hightlight id_;_Browser("登录 2").Page("登录").Link("登录")_;_script infofile_;_ZIP::ssf43.xml_;_
Browser("登录").Page("登录").WebEdit("WebEdit").Set "888888"
Browser("登录").Page("登录").WebEdit("WebEdit_2").Set "888888"
Wait 1
Browser("登录").Page("登录").Link("登录").Click
Wait 1
Browser("登录").Page("登录").WebCheckBox("WebCheckBox").Click
Wait 2
Browser("登录").Page("登录").Link("Link").Click
WriteLogs("相机触发完成！")
Wait 1
 @@ hightlight id_;_4919474_;_script infofile_;_ZIP::ssf65.xml_;_
Dim carCode,inoutType
carCode=SwfWindow("实时监控界面").SwfTable("gridControl1").GetCellData(0,2)
inoutType=SwfWindow("实时监控界面").SwfTable("gridControl1").GetCellData(0,3)
Wait 1
SwfWindow("实时监控界面").SwfEdit("SwfEdit").Set carCode @@ hightlight id_;_3999344_;_script infofile_;_ZIP::ssf61.xml_;_
SwfWindow("实时监控界面").SwfObject("查询").Click
If Len(carCode)>0 and inoutType="进" Then
	WriteLogs(carCode&"进场成功！")
Else
	WriteLogs("进场失败，请检查相应日志！")
End If

'关闭浏览器进程
SystemUtil.CloseProcessByName("iexplore.exe")

'出场缴费业务逻辑
'Wait 1 @@ hightlight id_;_1707466_;_script infofile_;_ZIP::ssf47.xml_;_
'SwfWindow("实时监控界面").SwfEdit("SwfEdit").Set carCode @@ hightlight id_;_1707466_;_script infofile_;_ZIP::ssf48.xml_;_
'Wait 1
'SwfWindow("实时监控界面").SwfObject("查询").Click @@ hightlight id_;_1838298_;_script infofile_;_ZIP::ssf53.xml_;_
'Wait 1
'SwfWindow("实时监控界面").SwfObject("缴费").Click 61,29 @@ hightlight id_;_1838380_;_script infofile_;_ZIP::ssf54.xml_;_
'If SwfWindow("实时监控界面").SwfWindow("提示信息").Exist Then
'	SwfWindow("实时监控界面").SwfWindow("提示信息").SwfObject("OK").Click
'	WriteLogs(carCode+"车牌号未找到或无法进行缴费！")
'Else
'	WriteLogs(carCode+"车辆进行相应缴费！")
'End If

 @@ hightlight id_;_6230234_;_script infofile_;_ZIP::ssf55.xml_;_