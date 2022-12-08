import EventHandlerInterface from '../../../@shared/event/event-handler.interface';
import ProductCreatedEvent from '../customer-created.event';

import logger from '../../../../infrastructure/@shared/log/logger';

export default class SendConsoleWhenCustomerIsCreated1Handler
    implements EventHandlerInterface<ProductCreatedEvent>
{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handle(event: ProductCreatedEvent): void {
        logger.info(`Esse é o primeiro console.log do evento: CustomerCreated`);
    }
}
