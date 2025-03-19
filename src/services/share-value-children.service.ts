export class ShareValueChildren {
    private value: string;

    constructor (value: string) {
        this.value = value
    }

    getValue () {
        return this.value
    }

    setValue (value: string) {
        if(value.length < 1) {
            throw new Error('The value has to be a string, and has to have at least a character')
        }
        this.value = value
    }
}

export const sharedValueChildren = new ShareValueChildren("")