#coding=utf-8
# 处理Post,Get请求体参数的文件
# 用于view.py中


# 请求体中的page_num
def getPageNum(_PAGENUM):
    if(_PAGENUM):
        return _PAGENUM
    else:
        return '1'

# 请求体中的page_size
def getPageSize(_PAGESIZE):
    if(_PAGESIZE):
        return _PAGESIZE
    else:
        return '9999'


#如果请求中有新数据 则保存为新数据 否则返回旧数据
def getDetailInfo(pre,req):
    if(req):
        return req
    return pre
