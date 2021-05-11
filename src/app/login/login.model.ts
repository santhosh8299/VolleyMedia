export interface UserDetails{
    userid: string;
    password: string;
    username?: string
}
export const UserDB=[ 
        {
            userid : 'abc@media.com',
            password:'abc123',
            username:'tom'
        }, 
        {
            userid : 'def@media.com',
            password:'def123',
            username:'dick'
        }

    ]
export const validationMessages = {
        userid: {
          required: 'User Id is required.',
          invalid: 'please enter a valid User Id'
        },
        password: {
          required: 'Password is required.',
          invalid: 'please enter a valid Password'
        }
      };