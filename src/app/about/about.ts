import { EmailValidator } from '@angular/forms';

export interface About {
    firstname: string;
    lastname: string;
    email: EmailValidator;
    message: string;
}
