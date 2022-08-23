import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (params){
        return {
            title: 'Ana sayfa!',
        };
    }
    return error(404, "I can't get it clearly.")
}