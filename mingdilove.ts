const REGIONS = ['ap-northeast-2', 'us-east-1', 'us-west-2'] as const; // 리전 목록을 상수로 고정 (as const를 써서 타입으로 변환)

type AwsRegion = typeof REGIONS[number]; // REGIONS 배열의 값들만 허용하는 타입 생성

interface ServerConfig {
    id: string;
    region: AwsRegion; // 'ap-northeast-2' 등 지정된 것만 가능
    instanceCount: number; // 파이썬의 numeric(int) 역할
}

const myConfig: ServerConfig = {
    id: "web-server-01",
    region: "ap-northeast-2", // 오타 나면 바로 에러!
    instanceCount: 3
};