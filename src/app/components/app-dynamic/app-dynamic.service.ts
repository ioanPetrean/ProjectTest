import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { DynamicModel } from "../shared/shared/shared.service";

export interface IDynamicService{
    dynamicChange(): Observable<DynamicModel>;
    setDynamic(val: DynamicModel):void
}

export class DynamicBaseService implements IDynamicService{
    private dyn$ = new Subject<DynamicModel>();

    dynamicChange(): Observable<DynamicModel> {
        return this.dyn$.asObservable();

    }

    setDynamic(val: DynamicModel):void {
        this.dyn$.next(val);
    }
}