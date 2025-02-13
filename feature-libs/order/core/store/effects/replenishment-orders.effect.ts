import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { normalizeHttpError } from '@spartacus/core';
import { ReplenishmentOrderList } from '@spartacus/order/root';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ReplenishmentOrderHistoryConnector } from '../../connectors/replenishment-order-history.connector';
import { OrderActions } from '../actions/index';

@Injectable()
export class ReplenishmentOrdersEffect {
  @Effect()
  loadUserReplenishmentOrders$: Observable<OrderActions.UserReplenishmentOrdersAction> =
    this.actions$.pipe(
      ofType(OrderActions.LOAD_USER_REPLENISHMENT_ORDERS),
      map((action: OrderActions.LoadUserReplenishmentOrders) => action.payload),
      switchMap((payload) => {
        return this.replenishmentOrderConnector
          .loadHistory(
            payload.userId,
            payload.pageSize,
            payload.currentPage,
            payload.sort
          )
          .pipe(
            map((orders: ReplenishmentOrderList) => {
              return new OrderActions.LoadUserReplenishmentOrdersSuccess(
                orders
              );
            }),
            catchError((error) =>
              of(
                new OrderActions.LoadUserReplenishmentOrdersFail(
                  normalizeHttpError(error)
                )
              )
            )
          );
      })
    );

  constructor(
    private actions$: Actions,
    private replenishmentOrderConnector: ReplenishmentOrderHistoryConnector
  ) {}
}
