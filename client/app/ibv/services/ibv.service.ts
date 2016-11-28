import {Injectable} from '@angular/core';//make server injectable
import {Http, Headers} from '@angular/http';//make request to api
import 'rxjs/add/operator/map'; //observable
import 'rxjs/add/operator/toPromise';
import { Router} from '@angular/router';

@Injectable()
export class IbvService{

    private resourceBaseUrl: string

    private resources: Object;
    private resourceLoaded: boolean;

    //injecting
    constructor (private router: Router, private http: Http){
        this.resourceLoaded = false;

        this.resourceBaseUrl = "/myapp/ibv/api/resources/";
    };

    redirectIfResourceNotLoaded(){
        if (!this.isResourceLoaded()){
            this.router.navigate(['/ex-types']);
        }
    }

    isResourceLoaded(){
        return this.resourceLoaded;
    };

    getResources(){
        if (this.isResourceLoaded()){
            return this.resources;
        }else{
            this.router.navigate(['/ex-types']); 
        }
        
    };

    setUpResources(resources: Object){
        this.resources = resources;
        this.resourceLoaded = true;
    };

    getDefinitionExResources(){
        // return this.http.get("https://raw.githubusercontent.com/votuankiet/redo-resources/master/ibv/definition/allUnits.json")
        //         .map(res=>res.json());

        return this.http.get("/allUnits.json")
                .map(res=>res.json());
    };
}