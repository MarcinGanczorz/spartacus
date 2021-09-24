import { Injectable } from '@angular/core';
import { OrderPlacedEvent } from '@spartacus/checkout/root';
import { StateEventService } from '@spartacus/core';
import { CheckoutActions } from '../store/actions/index';

@Injectable()
export class CheckoutEventBuilder {
  constructor(protected stateEventService: StateEventService) {
    this.register();
  }

  /**
   * Registers checkout events
   */
  protected register(): void {
    this.orderPlacedEvent();
  }

  /**
   * Register an order successfully placed event
   */
  protected orderPlacedEvent(): void {
    this.stateEventService.register({
      action: CheckoutActions.PLACE_ORDER_SUCCESS,
      event: OrderPlacedEvent,
    });
  }
}
