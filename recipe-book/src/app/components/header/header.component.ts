import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('HeaderComponent.subscriptions.unsubscribe()');
    this.subscriptions.unsubscribe();
  }

  onSaveData() {
    this.storageService.storeRecipes();
  }

  onFetchData() {
    this.subscriptions.add(this.storageService.fetchRecipes$().subscribe());
  }
}
