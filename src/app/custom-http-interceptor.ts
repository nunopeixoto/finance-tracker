import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, retry} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Add Auth Token
    const token = localStorage.getItem('token');
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(req)
        .pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status == 500) {
                    this.toastr.error('An unexpected error has occured.', 'Error');
                }
            
                // further error handling. validation messages, dev environment help, etc.
                return throwError(error);
            })
        );
  }
}