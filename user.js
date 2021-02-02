export default function User()
{
   console.warn("hello user")
}

export function UserOther()
{
    console.warn("hello other user")
}
export let UserVar="hello user var";

export class UserClass{
    test()
    {
        console.warn("user class test function")
    }
}

 class UserOtherClass{
    test()
    {
        console.warn("other user class test function")
    }
}
export let UOC= new UserOtherClass();