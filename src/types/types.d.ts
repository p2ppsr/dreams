// @packetpay/js
declare module '@packetpay/js' {
  // Define the shape of the request body
  interface PacketPayRequestBody {
    provider: string
    query: object
  }

  interface PacketPayResponse {
    status: number
    headers: Record<string, string | string[]> // A Record type is used for key-value pairs
    body: any // Body can be any type, as the structure can vary
  }

  function PacketPay(
    url: string,
    fetchConfig?: Object,
    config?: {
      authriteConfig?: Object
      ninjaConfig?: Object
      clientPrivateKey?: string
      description?: string
    }
  ): Promise<PacketPayResponse>

  export default PacketPay
}

// authrite-express.d.ts
declare module 'authrite-express' {
  import { RequestHandler } from 'express'
  import { Server as HttpServer } from 'http'
  import { Socket } from 'socket.io'

  // Types for middleware configuration
  interface AuthriteExpressMiddlewareConfig {
    serverPrivateKey?: string
    baseUrl?: string
    requestedCertificates?: RequestedCertificateSet
    initialRequestPath?: string
  }

  interface RequestedCertificateSet {
    certifiers: string[]
    types: string[]
  }

  // Authrite express middleware function signature
  export function middleware(config: AuthriteExpressMiddlewareConfig): RequestHandler

  // Types for WebSocket usage
  interface AuthSockOptions {
    cors?: {
      origin: string | string[]
    }
    serverPrivateKey: string
  }

  interface AuthSock {
    id: () => string
    rooms: () => Set<string>
    handshake: () => HandshakeInformation
    use: (socket: Socket, next: () => void) => void
    join: (room: string) => void
    leave: (room: string) => void
    to: (room: string) => Socket
    disconnect: () => void
    close: () => void
    emit: (event: string, data: object | string | Buffer) => void
    on: (event: string, callback: (msg: any) => void) => void
  }

  interface HandshakeInformation {
    headers: Record<string, string>
    address: string
    secure: boolean
    // Additional handshake properties can be defined here
  }

  // Function to configure AuthSock for WebSocket usage
  export function socket(http: HttpServer, options: AuthSockOptions): AuthSock
}

// @packetpay/express.d.ts
declare module '@packetpay/express' {
  import { Request, RequestHandler } from 'express'

  /**
   * Configuration options for the PacketPay middleware.
   */
  interface PacketPayOptions {
    /**
     * A function that returns the price of the request in satoshis.
     * Can return a Promise. If it returns 0, payment is not required.
     * @param req The Express request object.
     * @returns The price in satoshis or a Promise that resolves to the price.
     */
    calculateRequestPrice?: (req: Request) => number | Promise<number>

    /**
     * A hex-formatted 256-bit server private key. This should be the same key used to
     * initialize the Authrite middleware.
     */
    serverPrivateKey?: string

    /**
     * Configuration object for UTXONinja, used internally.
     */
    ninjaConfig?: {
      /**
       * The URL to the UTXONinja Dojo.
       */
      dojoURL?: string
    }
  }

  /**
   * Represents information added to the request object by the PacketPay middleware.
   */
  interface PacketPayRequestExtension {
    /**
     * The number of satoshis paid with the request.
     */
    satoshisPaid: number

    /**
     * The payment reference number.
     */
    reference: string
  }

  /**
   * Adds PacketPay middleware to the Express application, enabling payment processing
   * for requests.
   * @param options Configuration options for the PacketPay middleware.
   * @returns An Express middleware function.
   */
  function PacketPay(options: PacketPayOptions): RequestHandler

  export = PacketPay
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}