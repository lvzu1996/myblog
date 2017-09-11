#!/usr/bin/env python
#coding=utf-8

from aliyunsdkcore import client
from aliyunsdksts.request.v20150401 import AssumeRoleRequest

import json
# 构建一个 Aliyun Client, 用于发起请求
# 构建Aliyun Client时需要设置AccessKeyId和AccessKeySevcret
# STS是Global Service, API入口位于华东 1 (杭州) , 这里Region填写"cn-hangzhou"

def _getSTStoken(session_name):
    clt = client.AcsClient('LTAItm7fS9L6UV2R','K9WF2FzfBHK6szZL1hb6JOQcn5yCfp','cn-beijing')
    # 构造"AssumeRole"请求
    request = AssumeRoleRequest.AssumeRoleRequest()
    # 指定角色
    request.set_RoleArn('acs:ram::1035891576597919:role/myblog-role')
    # 设置会话名称，审计服务使用此名称区分调用者
    request.set_RoleSessionName(session_name)

    # 发起请求，并得到response
    response = clt.do_action_with_exception(request)

    return json.loads(response)
