import { Injectable } from '@angular/core';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master',
      status: 'active'
    },
    {
      name: 'Test',
      status: 'inactive'
    },
    {
      name: 'Hidden',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }

  constructor() {}
}
