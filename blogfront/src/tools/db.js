import DBF from './dbFactory'

export default DBF.context;

let prefix = ''
if(__LOCAL__){
    prefix = 'http://47.94.129.112'
}


DBF.create('api', {
    list: {
        url       : prefix+'/api/',
        method    :'GET',
    },
});
