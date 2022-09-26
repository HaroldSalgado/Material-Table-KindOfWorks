import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'cdk-drag-drop-sorting-example',
  templateUrl: 'cdk-drag-drop-sorting-example.html',
  styleUrls: ['cdk-drag-drop-sorting-example.css'],
})
export class CdkDragDropSortingExample {
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
  ];

  moviesObj = [
    { title: 'Episode I - The Phantom Menace' },
    { title: 'Episode II - Attack of the Clones' },
    { title: 'Episode III - Revenge of the Sith' },
    { title: 'Episode IV - A New Hope' },
    { title: 'Episode V - The Empire Strikes Back' },
    { title: 'Episode VI - Return of the Jedi' },
    { title: 'Episode VII - The Force Awakens' },
    { title: 'Episode VIII - The Last Jedi' },
  ];

  columns = ['movie'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    this.movies = this.movies.slice();
    console.log(this.movies);
  }

  dropObj(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.moviesObj, event.previousIndex, event.currentIndex);
    this.moviesObj = this.moviesObj.slice();
    console.log(this.moviesObj);
  }

  editItem(event) {
    console.log('Edit');
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
