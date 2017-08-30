# Create your views here.
#coding=utf-8
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from models import Pictures,Accounts,Comments,TestModel,TestModel2
from django.core import serializers
from django.views.decorators.csrf import csrf_protect,csrf_exempt
from functions import *
import json
import urllib
import sys
reload(sys)
sys.setdefaultencoding("utf-8")


@require_http_methods(["GET"])
def get_pic_urls(request):
    response = {}
    try:
        pictures = Pictures.objects.filter()
        response['list']  = json.loads(serializers.serialize("json", pictures))
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)

@require_http_methods(["GET"])
def add_pic_urls(request):
    response = {}
    try:
        picture = Pictures(pic_name=request.GET.get('pic_name'),pic_url=request.GET.get('pic_url'))
        picture.save()
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)

@csrf_protect
@csrf_exempt
@require_http_methods(["POST"])
def account_register(request):
    response = {}
    try:
        hasAccount = Accounts.objects.filter(username=request.POST['username'])
        if(hasAccount):
            response['msg'] = 'registerd username'
            response['error_num'] = 0
            return JsonResponse(response)
        account = Accounts(username=request.POST['username'],password=request.POST['password'],nickname=request.POST['nickname'])
        account.save()
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1
        # response['test'] = request.POST.get('username')
    return JsonResponse(response)

@csrf_protect
@csrf_exempt
@require_http_methods(["POST"])
def account_login(request):
    response = {}
    try:
        hasAccount = Accounts.objects.get(username=request.POST['username'])
        if(hasAccount):
            if(hasAccount.password==request.POST['password']):
                response['msg'] = 'success'
                response['error_num'] = 0
                # response['test'] = hasAccount.password
                return JsonResponse(response)
            response['msg'] = 'passwordError'
            response['error_num'] = 0
            return JsonResponse(response)
        # response['msg'] = 'notRegisterd'
        # response['error_num'] = 0
        # return JsonResponse(response)

    except  Exception,e:
        # response['msg'] = str(e)
        # response['error_num'] = 1
        # # response['test'] = request.POST.get('username')
        response['msg'] = 'notRegisterd'
        response['error_num'] = 0
        return JsonResponse(response)
    return JsonResponse(response)


@require_http_methods(["GET"])
def comment(request):
    response = {}
    try:
        comment = Comments(user=request.GET.get('user'),comment=request.GET.get('comment'))
        comment.save()
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)


# Test api
@require_http_methods(["GET"])
def test_model(request):
    response = {}
    try:
        page_size = getPageSize(request.GET.get('page_size'))
        page_num = getPageNum(request.GET.get('page_num'))
        search_key= request.GET.get('search_key')
        print page_size
        print page_num

        if search_key:
            testmodel = TestModel.objects.filter(title__contains=search_key)
        else:
            testmodel = TestModel.objects.filter()

        tempList  = json.loads(serializers.serialize("json", testmodel))
        tempList2 = []

        # 处理返回的数据
        for i in tempList:
            tempList2.append({
                'times':i['fields']['times'],
                'user_num':i['fields']['user_num'],
                'title':i['fields']['title']
            })
        total = len(tempList2)

        data = {
            'list':tempList2,
            'total':total
        }
        response['data'] = data
        response['msg'] = 'success'
        response['success'] = True
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)

@require_http_methods(["GET"])
def test_model_fjy(request):
    response = {}
    try:
        testmodel = TestModel2.objects.filter().order_by('date') 
        tempList  = json.loads(serializers.serialize("json", testmodel))
        tempList2 = []


        # 处理返回的数据
        for i in tempList:
            tempList2.append({
                'date':i['fields']['date'],
                'leijiyaoqing_yh':i['fields']['leijiyaoqing_yh'],
                'xinzengyaoqing_yh':i['fields']['xinzengyaoqing_yh'],
                'leijiduihuan_kc':i['fields']['leijiduihuan_kc'],
                'xinzengduihuan_kc':i['fields']['xinzengduihuan'],
                'leiji_kcyh':i['fields']['leiji_kcyh'],
                'xinzeng_kcyh':i['fields']['xinzeng_kcyh'],
                '__v':i['fields']['v'],
            })
        total = len(tempList2)

        data = {
            'list':tempList2,
            'total':total
        }
        response['data'] = data
        response['msg'] = 'success'
        response['success'] = True
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)
