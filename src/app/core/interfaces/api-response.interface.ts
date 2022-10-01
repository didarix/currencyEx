export interface ApiResponse {
  result: number;
  success: boolean;
  query?: {
    amount:number;
    from:string;
    to:string;
  };
  date?:string;
  info?:{
    rate:number;
    timestamp:number;
  }
}
