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
