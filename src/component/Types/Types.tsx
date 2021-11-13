export interface IAuthor {
  name: string
}

export interface IPopupAlert {
  alert: string,
  className: string
}

export interface IBook {
  name: string,
  price: string,
  author: IAuthor
}

export interface selectorOptionType {
  label: string,
  value: IAuthor
}