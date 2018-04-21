import { Pipe , PipeTransform } from "@angular/core";
 

@Pipe({
name:'convertToSpaces'

})
export class convertToSpaces implements PipeTransform
{
transform(value:string , para:string)
{
    return value.replace(para," ");
}
}