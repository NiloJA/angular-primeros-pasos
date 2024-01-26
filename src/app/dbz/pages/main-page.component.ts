import { Component } from '@angular/core';
import { Chararter } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor(private dbzService: DbzService) { }

    get characters(): Chararter[] {
        return [...this.dbzService.characters];
    }

    onDeleteCharacter(id: string): void {
        this.dbzService.deleteCharacterById(id)
    }

    onNewCharacter( chararter: Chararter): void {
        this.dbzService.addCharacter( chararter);
    }
}