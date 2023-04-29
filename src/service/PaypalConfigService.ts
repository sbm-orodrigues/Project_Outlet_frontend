import { Injectable } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

export interface IPaypalPaymentHandler{
    onSuccess():void;
    onCancel():void;
    onFail():void;
}

@Injectable({
  providedIn: 'root'
})
export class PaypalConfigService {
    public payPalConfig ? : IPayPalConfig;
    public paymentHandler ? : IPaypalPaymentHandler;

    private convertToEUR(BGN: number){
        return BGN*0.51;
    }

    public initConfig(price: number, paymentHandler: IPaypalPaymentHandler): void {
        const amount:string = this.convertToEUR(price).toFixed(2);
        this.paymentHandler = paymentHandler;
        this.payPalConfig = {
            currency: 'BRL',
            clientId: 'sb',
            createOrderOnClient: (data) => < ICreateOrderRequest > {
                intent: 'CAPTURE',
                purchase_units: [{
                    amount: {
                        currency_code: 'BRL',
                        value: amount,
                        breakdown: {
                            item_total: {
                                currency_code: 'BRL',
                                value: amount
                            }
                        }
                    },
                    items: [{
                        name: 'Products',
                        quantity: '1',
                        category: 'DIGITAL_GOODS',
                        unit_amount: {
                            currency_code: 'BRL',
                            value: amount,
                        },
                    }]
                }]
            },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: (data, actions) => {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then((details: any) => {
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
                //Successful payment
                this.paymentHandler?.onSuccess();
            },
            onClientAuthorization: (data) => {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                //Successful payment
                this.paymentHandler?.onSuccess();
            },
            onCancel: (data, actions) => {
                console.log('OnCancel', data, actions);
                //Canceled payment
                this.paymentHandler?.onSuccess(); // For demonstration
                //this.paymentHandler?.onCancel();
            },
            onError: err => {
                console.log('OnError', err);
                //Error with payment
                this.paymentHandler?.onFail();
            },
            onClick: (data, actions) => {
                console.log('onClick', data, actions);
            }
        };
    }
}
