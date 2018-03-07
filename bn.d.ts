import { Buffer } from 'buffer'

type Endianness = 'le' | 'be'
type PrimeName = 'k256' | 'p224' | 'p192' | 'p25519'
declare class Red {
}
declare class Mont extends Red {

}

declare class MPrime {
  constructor(name: string, p: BN)
  reduce(b: BN): BN
}
declare class K256 extends MPrime {
}
declare class K244 extends MPrime {
}
declare class P192 extends MPrime {
}
declare class P25519 extends MPrime {
}

type BNR = BN
export declare class BN {
  constructor(number: number | string | number[] | BN | Buffer, base?: number, endian?: Endianness)
  static red(pn: PrimeName | BN): Red
  static mont(pn: PrimeName | BN): Mont
  static _prime(pn: PrimeName): MPrime
  static isBN(b: object): boolean

  //Arithmetics
  add(b: BN): BN
  addn(n: number): BN
  iadd(b: BN): BN
  iaddn(n: number): BN

  sub(b: BN): BN
  subn(b: number): BN
  isub(b: BN): BN
  isubn(n: number): BN

  mul(b: BN): BN
  mulTo(b: BN, out: BN): BN
  mulf(b: BN): BN
  muln(b: number): BN
  imul(b: BN): BN
  imuln(n: number): BN

  div(b: BN): BN
  divRound(b: BN): BN
  divn(b: number): BN
  idivn(b: number): BN
  mod(b: BN): BN
  modn(b: number): BN
  umod(b: BN): BN
  divmod(b: BN, mode?: 'div' | 'mode', positive?: boolean): { div?: BN, mod?: BN }

  abs(): BN
  iabs(): BN
  neg(): BN
  ineg(): BN

  sqr(): BN
  isqr(): BN
  pow(b: BN): BN

  // Bit operations
  and(b: BN): BN
  andln(b: BN): BN
  iand(b: BN): BN
  uand(b: BN): BN
  iuand(b: BN): BN
  or(b: BN): BN
  uor(b: BN): BN
  ior(b: BN): BN
  iuor(b: BN): BN
  uxor(b: BN): BN
  xor(b: BN): BN
  iuxor(b: BN): BN
  ixor(b: BN): BN
  notn(w: number): BN
  inotn(width: number): BN
  setn(b: number): BN
  testn(b: number): boolean
  maskn(b: number): BN
  imaskn(bits: number): BN
  bincn(b: number): BN

  // bit shifting
  shln(bits: number): BN
  shrn(bits: number): BN
  ushln(bits: number): BN
  ushrn(bits: number): BN
  ishln(bits: number): BN
  ishrn(bits: number): BN
  iushln(bits: number): BN
  iushrn(bits: number): BN

  // compare
  cmp(b: BN): number
  cmpn(b: number): number
  ucmp(b: BN): number
  eq(b: BN): boolean
  eqn(b: number): boolean
  gt(b: BN): boolean
  gtn(b: number): boolean
  gte(b: BN): boolean
  gten(b: number): boolean
  lt(b: BN): boolean
  ltn(b: number): boolean
  lte(b: BN): boolean
  lten(b: number): boolean

  // reduction
  egcd(b: BN): { a: BN, b: BN, gcd: BN }
  gcd(b: BN): BN
  invm(b: BN): BN

  // Red conversion
  forceRed(r: Red): BNR
  fromRed(): BN
  toRed(r: Red): BNR

  // Red instructions
  redAdd(b: BNR): BNR
  redIAdd(b: BNR): BNR
  redIMul(b: BNR): BNR
  redISqr(): BNR
  redISub(b: BNR): BNR
  redInvm(): BNR
  redMul(b: BNR): BNR
  redNeg(): BNR
  redPow(b: BN): BNR
  redShl(b: number): BNR
  redSqr(): BNR
  redSqrt(): BNR
  redSub(b: BNR): BNR

  // Utilities
  clone(): BN
  copy(b: BN): void
  toArray(endian?: Endianness, length?: number): number[]
  toArrayLike(ArrayType: FunctionConstructor, endian?: Endianness, length?: number): any[]
  toBuffer(endian?: Endianness, length?: number): Buffer
  toJSON(): string
  toNumber(): number
  toString(base?: number, length?: number): string
  toTwos(width: number): BN
  fromTwos(width: number): BN
  bitLength(): number
  byteLength(): number
  zeroBits(): number
  inspect(): string
  strip(): BN
  isEven(): boolean
  isNeg(): boolean
  isOdd(): boolean
  isZero(): boolean
}

export default BN