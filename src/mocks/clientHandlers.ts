import { http,  HttpResponse,} from "msw";

type ClientAddRequest = {
    clientName: string;
    reading: string;
    phone: number;
    email: string;
    address: string;
    memo: string;
}

type ClientAddResponse = {
    result: number;
    message: string;
}

// export const clientHanders = [
//     http.post<ClientAddRequest, ClientAddResponse>("http://localhost:8080/api/client/add", async ({ request}) => {
//         const requestBody = await request.json();
//         const parsed = JSON.parse(requestBody);
//         console.log(parsed);
//         return HttpResponse.json({});
//     }),
// ];

export const clientHanders = [
    http.post<
  {}, // ここにはパスパラメータがないため空のオブジェクトを使用
  ClientAddRequest,
  ClientAddResponse,
  '/api/client/add'
>('/api/client/add', async ({ request }) => {
  // リクエストボディをClientAddRequest型で取得
  const requestBody = await request.json() as ClientAddRequest;
  console.log('Received client add request:', requestBody);

  // モックのレスポンスデータ
  const mockResponse: ClientAddResponse = {
    result: 1,
    message: 'Client added successfully'
  };

  // レスポンスを返す
  return HttpResponse.json(mockResponse);
}),
];
