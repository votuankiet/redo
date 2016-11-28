import {Injectable} from '@angular/core';//make server injectable
import {Http, Headers} from '@angular/http';//make request to api
import 'rxjs/add/operator/map'; //observable


@Injectable()
export class TaskService{
    constructor (private http: Http){
        console.log('Task service initialized')
    }

    getTasks(){
        return this.http.get('/myapp/tasklist/api/tasks').map(res=>res.json());
    }

    addTask(newTask){
        var headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.post('/myapp/tasklist/api/task', JSON.stringify(newTask), {headers: headers})
            .map(res =>  res.json());
    }

    deleteTask(id){
        return this.http.delete('/myapp/tasklist/api/task/' + id)
            .map(res=> res.json()); //res is an expressjs object, so we can call res.json()
    }

    updateStatus(newTask){
        var headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.put('/myapp/tasklist/api/task/'+ newTask._id, JSON.stringify(newTask), {headers: headers})
            .map(res =>  res.json());
    }
}